#!/usr/bin/env python
# -*- coding: utf-8 -*- #

#from pelican.plugins import pelican_gist

AUTHOR = u'Roberto Segebre'
DISQUS_SITENAME = 'rsegebre'
SITENAME = u"rsegebre"
SITEURL = 'http://rsegebre.com'


TIMEZONE = "America/New_York"
LOCALE = ""

FEED_RSS = 'feeds/all.rss.xml'
CATEGORY_FEED_RSS = 'feed/%s.rss.xml'
GITHUB_URL = 'http://github.com/rsegebre'
GITHUB_ACTIVITY_FEED = 'https://github.com/rsegebre.atom'
GOOGLE_ANALYTICS = 'UA-32786140-1'
DEFAULT_LANG='en'
THEME = 'notmyidea'
PLUGIN_PATH = './lib/python2.7/site-packages/'

# Blogroll
LINKS =  (
    ('Colgate COSC Dept. Website', 'http://cs.colgate.edu'),
    ('Coding Horror Blog by Jeff Atwood', 'http://www.codinghorror.com/blog/'),
    ('This Developer\'s Life', 'http://www.thisdeveloperslife.com')
         )

# Social widget
SOCIAL = (
          ('twitter', 'http://twitter.com/rss1989'),
	  ('github', 'http://github.com/rsegebre'),
	  ('facebook', 'http://www.facebook.com/rsegebre'),
	  ('linkedIn', 'http://www.linkedin.com/pub/roberto-segebre/40/8b1/6b2'),
         )

# Plugins Pelican 3.0
PLUGINS = ['pelican_gist',]

TWITTER_USERNAME = 'rss1989'

DEFAULT_PAGINATION = 5


    
