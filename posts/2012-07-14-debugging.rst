Debugging thru life
#########################

:date: 2012-07-14
:author: Roberto Segebre
:tags: blog, debugging
:category: Blog

Interesting quote from Dijkstra (ring a bell?):

"If debugging is the process of removing bugs, then programming must be the process of putting them in."
Edsger Dijkstra

I was listening to a podcast about `problem solving <http://www.thisdeveloperslife.com/post/1-0-3-problems>`_ in relation to programming and related to various aspects in life. At some point during the podcast I asked myself, "How do I debug? What is the thought process (if any) when I encounter a bug."

This made me realize that, sadly enough, I never had a systematic way of approaching a bug. This seemed a terrible realization at first, but later I proceeded to rationalize this finding. Most of the projects I've worked, are small enough that debugging is trivial to some extent. Running my code against test cases seemed foolish, especially when the entire program is about 300 lines or so in most projects in college. Short programs along with one of the first things I learned about programming, to test your code as you go. This means that I am used to writing code that can be executed at any time along with some sort of documentation during the process. (1) Small programs and (2) testing as you go has reduced the need of developing better debugging skills in my four years programming.


But as a lab tutor for some computer science courses I've had to look at other peoples code and the worst mistakes I've seen are to write all your code without ever running any of it, then debugging it all at once. Two reasons I would never recommend this are: (1) Initial bugs can be very costly later on in your code and make the rest of your code useless once initial bugs are fixed. (2) It is harder to debug all your code at once. Think about it, you just finished implementing a tricky algorithm, about 300 to 400 lines of code, it took you a good 3 hours of coding plus a couple more figuring out the algorithm, the deadline is coming soon. The last thing you would want to do is spend twice that time debugging your code. This scenario might be unrealistic for many of you, but it is probably true for most college students.

So what would be a good debugging process for college-type programming assignments? I would say that a good bug-avoiding-style / defensive programming style, this means that you should (1) think of the layout or algorithm you are going use, write some pseudocode or draw a diagram anything that helps you organize your thoughts on how to solve the current problem at hand. Programming without thinking is one of the biggest mistakes that will probably yield an incorrect program or if it works a lot of bugs. (2) Test your code in small portions, gradual and incremental debugging. This means that for example, for every 30 minutes of coding you do take other 30 minutes debugging, or some time scheme that helps reminds you to debug constantly and not procrastinate. Also after you've tried fixing a bug and you know the program logic isn't incorrect, you can always ask for support in `stack overflow <http://stackoverflow.com/>`_, it is very likely that your question (or similar) has already been asked/answered. 



  

   
