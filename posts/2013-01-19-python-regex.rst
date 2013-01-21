Quick Intro to regular expressions with Python
#########################################################

:date: 2013-01-19
:author: Roberto Segebre
:tags: blog, python 
:category: Python


I recently had to use quite a lot of parsing in Python for work-related stuff, so I've been looking at what are some of the best ways to be able to parse patterns and the answer is of course, regular expressions! (I use Python because I feel more comfortable scripting in Pything than in Linux Shell). I hope to give you a quickstart into putting regular expressions in use!

First of all a regular expression (a.k.a. regex) is a way to describe a pattern using some pre-defined symbols, of course the `full definition <http://en.wikipedia.org/wiki/Regular_expression#Formal_language_theory>`_ goes into language theory, grammars and other cool stuff that I won't talk about ;(. To get you started here are the basic symbols in Python used when defining regular expressions::

	'[...]' - The squared brackets are the most helpful ones, you can define a range or set of elements, for example '[a-z] will find any one lower case letter or [123] will find only one number, 1,2 or 3. A statement with [...] is called a character class.
	'^' - Negates (aka finds the complement) of a character class, for example want to find anything but a lower case letter you will use [^a-z]. Goes at the beginning of a character class, outside of a character class it will try to match the regex only at the beginning of a line.
	'\' - You can use the '\' to escape any special character, for example if you want to find a backlash your regex would be '\\'.
	'+' & '*' - These are one of my favorite symbols since they allow pretty powerful regexes. '*' repeats the matching of the preceding character or character class zero or more times. Versus '+' which does the same but repeat s the matching of the preceding character at least 1 or more times. Big difference there so be sure to remember, '*' zero or more and '+' one or more.

I think this gives us plenty to get started with writing pretty powerful regular expressions, or at least it did for me! :D So now for example picture you want to parse a log file that is formated the following way::

	12/14/2012 13:30:00 [INFO: The world is getting close to an end.]
	12/21/2012 00:01:00 [ERROR: Damn, I guess it didn't, because I am still logging.]
	

So by taking a quick look at my example it is a pretty straightforward log, it contains [date] [time] [message], and they are all separated by a space.Now lets say we wanted to parse out all the dates for every line in this log. What regular expression would we use? First we need to open the file we wish to run the regex on. This is one way of doing it that allows you to open very big files by mapping them to the memory. I will be mapping it with read only access but you can also map with write access as well::

	>>> import re,mmap,os #Importing the regex module, plus a couple more
	>>> f = open("log_name","r") #Assuming my log file is in a text file
	>>> size = os.stat("/home/rsegebre/tests/log").st_size # stat returns info about the file and st_size returns the size of the file in bytes
	>>> data = mmap.mmap(f.fileno(),size,access=mmap.ACCESS_READ) # Maps the file to memory for read only access, you can treat as a string and file object, allows you to work with biiiiig files)
	
Now we are ready to try running regexs against our file, have you had time to think of the regex to run? Here is one way of doing it::

	>>> re.findall(u"[0-9]+/[0-9]+/[0-9]+",data)
	['12/14/2012', '12/21/2012']
 
So I just used the findall function in the re module which is the most helpful one for me, it does what the function name says, it finds all matches of your regular expression! Now let us break down the regex into a smaller components to make it more readable::

	"[0-9]" - matches any one digit one time
	"[0-9]+" - matches any digit one or more times
	"[0-9]+/" - matches any digit one or more times that is immediately followed by a "/"

This easily fits the pattern that we have for our dates which is month/day/year. Is this the only way? Definitely no, there are plenty of ways for example your regular expression could be: u"\d+/\d+/\d+" in which \d is a shortcut for [0-9], there could be infinitely many regular expressions instead of the one I showed, but trying to keep them simple gets harder depending on what you are filtering for. 

Now lets say that the log file has a lot more lines, some lines are not formatted as earlier on, but we still only care about the lines that are formatted as earlier on ([date] [time] [message]) how do we write a regular expression to extract all the lines that fit this exact pattern only? One way to do it is as follows::

	>>> re.findall(u"\d+/\d+/\d+ \d+:\d+:\d+ \[.*\]",data)
	['12/14/2012 13:30:00 [INFO: The world is getting close to an end.]', "12/21/2012 00:01:00 [ERROR: Damn, I guess it didn't, because I am still logging.]"]

Yeah, I know this regex is veeeery long regex, but I think it does a decent job of getting the data. Again, there are infinitely different regexs to find the same thing, but try to focus on the most complete regex that only gets you what you are looking for and nothing else. For example this regex could be further complete by instead specifying how many times I expect every number in the date or time. Anyways this is all I got to show you I hope this got you started and curious about regexs in general, as well as allow you to parse pretty much anything patterns you want! If you have any questions or comments please leave them below!

~rs

Resources:

* `Python regex Module <http://docs.python.org/2/library/re.html>`_
* `Python os Module <http://docs.python.org/2/library/os.html>`_
* `Finding regex in file <http://stackoverflow.com/questions/4989198/python-find-regexp-in-a-file>`_
