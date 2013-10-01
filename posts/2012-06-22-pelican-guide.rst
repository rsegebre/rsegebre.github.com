Setting up your github website
##############################

:date: 2012-06-22
:author: Roberto Segebre
:tags: blog, website, pelican, python, github
:category: Blog

I said in my first post that I was going to post a guide on how to set-up your own website using `pelican  <http://pelican.notmyidea.org/en/latest/>`_ and `github <http://www.github.com>`_ from a Linux environment.

Environment:
============
So if you are not already running Linux in your laptop, then you have some options:

1. Install Linux on a virtual machine:

 - I recommend using `VirtualBox <https://www.virtualbox.org/>`_, it is a free and simple to use. Simply `download  <https://www.virtualbox.org/wiki/Downloads>`_ the respective package for your current OS and install it, very simply click and install process. But if you have any issues leave a comment below or just refer to the `installation documentation <https://www.virtualbox.org/manual/ch02.html#installation_windows>`_.
 - After you install VirtualBox you can download any version of Linux:

  - For users that are not used to the Linux shell simply download the `desktop version <http://www.ubuntu.com/download/desktop>`_ of Ubuntu, one of the various flavors of Linux. 
  - For more advanced users you can download the `server version <http://www.ubuntu.com/download/server>`_ of Ubuntu. It doesn't have a GUI or any of the extra graphic packages that come with the desktop version.

 - After downloading the version of Ubuntu that you want to use, proceed to starting your VirtualBox software and simply clicking on the *new* button in order to create a new virtual machine.
 
  - Then simply follow the steps indicated by the VirtualBox Wizard. You give your machine any name, but for operating system you must choose Linux and then the corresponding version of Ubuntu (32 bit or 64 bit, whichever you downloaded).
  - If you are only going to use this virtual machine for publishing to your website, then I recommend using 512 MB of RAM and a new hard disk of 4 GB using VDI, Dynamically allocated. Pretty much the default settings.

 - Then after we finish creating the new virtual machine you can simply select it and click on start, to power up the machine. When you do so a new wizard will show up asking you to select an image. In here you have to select the version of Ubuntu you downloaded and hit next. Then simply follow the installation procedure for Ubuntu which should take about 5-10 min. You can leave the default setting on pretty much anything. (If you have issues installing Ubuntu on your Virtual Machine leave a comment or refer to the `documentation here <https://help.ubuntu.com/12.04/installation-guide/i386/d-i-intro.html>`_.)
 - So after you are done installing Ubuntu fire up the almighty Linux shell and you are ready to move on the next part. 
 
2. Install Linux in your laptop:

 - I will not go over all the details, since this can be a more gruesome process or in some cases simpler! Regardless of which path you choose to follow try to refer to the official documentation first. 

  - Click on your current OS: { `Windows <https://help.ubuntu.com/community/Installation>`_ | `Mac OS <http://www.ubuntu.com/download/help/create-a-usb-stick-on-mac-osx>`_ }

Installing Pelican:
===================

Kudos if you made it here, or even if you simply scrolled down here. Believe me, installing Pelican is as straightforward as it gets. Once you are inside your beloved Linux shell simply type::

    $ sudo pip install pelican

But don't worry if the above didn't work. If the above statement threw some sort of error, then you need to check a couple of things first:

- Is Python 2.7 installed? Run the following command to find out::

    $ python -V

  and you should get::

    $ Python 2.7.3

- If you get command not found or other error message it means you probably do not have python installed so you can install by running the following command::

    $ apt-get install python

- Now we have to install `pip  <http://www.pip-installer.org/en/latest/installing.html#>`_ to make our lives a little better. To do this run the following commands::

    $ wget http://pypi.python.org/packages/source/p/pip/pip-1.0.tar.gz
    $ tar xvfz pip-1.0.tar.gz
    $ cd pip-1.0/
    $ python setup.py install

- If you have any other version of python installed then you have to install the python package `argparse <http://pypi.python.org/pypi/argparse/>`_, which you can install by running the command::

    $ pip install argparse

- Without further ado we shall `install pelican <http://pelican.notmyidea.org/en/latest/getting_started.html>`_::

    $ pip install pelican     

  Done installing stuff... kind of.

Github and Pelican (free hosting) :
===================================

So I won't go into much detail on what is `github`_  and how to completely use it since there is plenty of documentation in their site. I will simply tell you guys the basics you need. So you should take some time right now to register an account with them. But just before you leave three words: `distributed revision control! <http://en.wikipedia.org/wiki/Distributed_revision_control>`_ So when you come back use the following commands in order to install `github`_::

    $ apt-get install git-core

Then follow `this <https://help.github.com/articles/set-up-git>`_ little tutorial on how to perform the initial configuration on `github`_. Once you are done you can finally get started on your website:

1. `Create a new repository <https://help.github.com/articles/create-a-repo>`_ on github's website. You should name it *website.github.com*.
2. Go back to your linux shell and create a new directory with the same name, *website.github.com*. (Basically following the create a new repository guide linked above.) Or after you create your repository on the website write the following commands::

    $ mkdir website.github.com
    $ cd website.github.com
    $ git init #initialize repository
    $ touch README.rst
    $ nano README.rst #Or your favorite text editor (ie gedit, vi, etc)
    $ #add some content in your README.rst file (ie "this is a website" )
    $ git add . #add everything in the current folder
    $ git commit -m "first commit" #local commit
    $ git remote add origin https://github.com/username/website.github.com.git
    $ git push origin master #uploads to the link above.

  Ok, so you now are one step closer to becoming famous.

Quickstart your blog:
==============================

 Now that you have everything set-up properly and you are in your *website.github.com* folder in your linux shell, you can start using pelican. You can simply do::

    $ pelican-quickstart

 Sit down and robotically answer the questions! This will generate your configuration file in the current folder. After you are done answering the questions you can simply run the following commands to generate your website and upload it::

    $ pelican . -o . -s pelican.conf.py  #this generates the website using your settings
    $ git add .
    $ git commit -m "I just generate my website!"
    $ git push 

 So we are done. It may take some time but you can simply just go to website.github.com from your browser and your website should be up and running!

Organizing your posts:
======================

You can look at the structure of `my website <https://github.com/rsegebre/rsegebre.github.com>`_. I simply used three folders, one for my posts, pages and static content. You can add a new post by simply doing::

    $ touch post1.rst
    $ nano post1.rst

and write something like::

    Title to display on post:
    =========================

    :date: 2012-06-22
    :author: Roberto Segebre
    :tags: blog, pelican, github, etc
    :category: blog

    This is a post on how to suceed in life... Blah blah..

Save it and run the last four commands in the section above (pelican, add, commit, push), you can do this every time you do a change to your website and it should get updated in a couple minutes. A very cool `WYSIWYG text editor <http://rst.ninjs.org/>`_ for Restructured Text files (.rst files) is the one I am currently using to write this post. It is pretty sweet and you can also download the source code and simply run it on a local server, so you don't really need internet to write yours posts. The other markup language you can use is markdown (.md files) and there is also a really cool text editor for windows made by the `code52  <http://code52.org/>`_ open source community, it is called `markpad <http://code52.org/DownmarkerWPF/>`_. 

So with this I conclude the post. I will have another post later on on how to change your domain name on your `github page <http://pages.github.com/>`_. (But you will have to spend some money on your domain name.) Note that all of this can be done free of charge, you don't need to pay for hosting or anything like that, and you get a lot of flexibility in terms of you can do with it, like embedding an `applet <http://rsegebre.com/static/simple_database/appletloader.html>`_!

I hope you were able to follow through this long and painful guide! Remember parts of this guide have lots of resources, I just wanted to have a guide that takes you from scratch to an end-product. If you any questions or comments please post below. 

~rs
