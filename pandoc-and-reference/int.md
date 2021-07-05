[index](index.html#general)

### [int] 

Store an integer

The int object stores a number, initialized by its creation argument, 
which may be reset using its inlet and output by sending it the "bang" 
message. Sending a number sets a new value and outputs it. The output 
is truncated to an integer a la Max.



inlet 0

 - bang: outputs the value
 - float: set and output the value
 - `send` to a named object

inlet 1

 - float: set the value

outlet 0

 - float
 
> see also [[float]](float.html) [[value]](value.html) [[send]](send.html)

> updated for Pd version 0.48

