Python Finite State Machines
############################

:date: 2013-01-20
:author: Roberto Segebre
:tags: blog, python
:category: Python

Check this short but sweet non-deterministic Finite State Machine Function that simply accepts a FSM and returns a string if it is not ambiguous!

The idea is as follows:

- Take an edge if it has not already been visited, otherwise go to the next edge.
- If current state is final then you are done.

[gist:id=4581658,file=fsm_accept.py]

Any questions or comments please leave them below!

~rs
