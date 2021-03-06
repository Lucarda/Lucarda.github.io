## List of objects

The following is a list of built-in objects in Pd. (Not included in this 
list are messages, atoms, graphs, etc. which aren't typed into object 
boxes but come straight off the "add" menu.) 

### General 

[[bang]](bang.html) - output a bang message\
[[float]](float.html) - store and recall a number\
[[symbol]](symbol.html) - store and recall a symbol\
[[int]](int.html) - store and recall an integer\
[[send]](send.html) - send a message to a named object\
[[receive]]( # ) - catch "sent" messages\
[[select]]( # ) - test for matching numbers or symbols\
[[route]]( # ) - route messages according to first element\
[[pack]]( # ) - make compound messages\
[[unpack]]( # ) - get elements of compound messages\
[[trigger]]( # ) - sequence and convert messages\
[[spigot]]( # ) - interruptible message connection\
[[moses]]( # ) - part a numeric stream\
[[until]]( # ) - looping mechanism\
[[print]]( # ) - print out messages\
[[makefilename]]( # ) - format a symbol with a variable field\
[[change]]( # ) - remove repeated numbers from a stream\
[[swap]]( # ) - swap two numbers\
[[value]]( # ) - shared numeric value\
[[list]]( # ) - manipulate lists\

### Time 

[[delay]]( # ) - send a message after a time delay\
[[metro]]( # ) - send a message periodically\
[[line]]( # ) - send a series of linearly stepped numbers\
[[timer]]( # ) - measure time intervals\
[[cputime]]( # ) - measure CPU time\
[[realtime]]( # ) - measure real time\
[[pipe]]( # ) - dynamically growable delay line for numbers\

### Math 

[[expr]]( # ) - C-style expressions\
[[+]]( # ) - arithmetic\
[[-]]( # )\
[[*]]( # )\
[[/]]( # )\
[[pow]]( # )\
[[==]]( # ) - relational tests\
[[!=]]( # )\
[[>]]( # )\
[[<]]( # )\
[[>=]]( # )\
[[<=]]( # )\
[[&]]( # ) - bit twiddling\
[[&&]]( # )\
[[|]]( # )\
[[||]]( # )\
[[%]]( # )\
[[<<]]( # )\
[[>>]]( # )\
[[mtof]]( # ) - convert acoustical units\
[[ftom]]( # )\
[[powtodb]]( # )\
[[dbtopow]]( # )\
[[rmstodb]]( # )\
[[dbtorms]]( # ) \
[[mod]]( # ) - higher math\
[[div]]( # )\
[[sin]]( # )\
[[cos]]( # )\
[[tan]]( # )\
[[atan]]( # )\
[[atan2]]( # )\
[[sqrt]]( # )\
[[log]]( # )\
[[exp]]( # )\
[[abs]]( # )\
[[random]]( # ) - lower math\
[[max]]( # ) - greater or lesser of 2 numbers\
[[min]]( # )\
[[clip]]( # ) - force a number into a range\
[[wrap]]( # ) - wrap a number to range [[0, 1)\

### I/O via MIDI, OSC, and FUDI 

[[notein]]( # ) - MIDI input\
[[ctlin]]( # )\
[[pgmin]]( # )\
[[bendin]]( # )\
[[touchin]]( # )\
[[midiin]]( # )\
[[polytouchin]]( # )\
[[sysexin]]( # )\
[[midirealtimein]]( # )\
[[noteout]]( # ) - MIDI output\
[[ctlout]]( # )\
[[pgmout]]( # )\
[[bendout]]( # )\
[[touchout]]( # )\
[[polytouchout]]( # )\
[[midiout]]( # )\
[[makenote]]( # ) - schedule delayed "note off" message for a note-on\
[[stripnote]]( # ) - strip "note off" messages\
[[oscparse]]( # ) - OSC messages to and from Pd lists\
[[oscformat]]( # )\
[[fudiparse]]( # ) - FUDI messages to and from Pd lists\
[[fudiformat]]( # )\

### Arrays & Tables 

[[tabread]]( # ) - read a number from a table\
[[tabread4]]( # ) - read a number from a table\
[[tabwrite]]( # ) - write a number to a table\
[[soundfiler]]( # ) - read and write tables to soundfiles\
[[table]]( # ) - create a named table\
[[array]]( # ) - general array creation and manipulation\

### Misc 

[[loadbang]]( # ) - bang on load\
[[declare]]( # ) - set search path and/or load libraries\
[[savestate]]( # ) - mechanism for saving state of an abstraction\
[[pdcontrol]]( # ) - communicate with canvas (for example, to get directory)\
[[netsend]]( # ) - send messages over the internet\
[[netreceive]]( # ) - receive them\
[[qlist]]( # ) - message sequencer\
[[textfile]]( # ) - file to message converter\
[[text]]( # ) - general text handling\
[[openpanel]]( # ) - "Open" dialog\
[[savepanel]]( # ) - "Save as" dialog\
[[bag]]( # ) - set of numbers\
[[poly]]( # ) - polyphonic voice allocation\
[[key]]( # ) - numeric key values from keyboard\
[[keyup]]( # )\
[[keyname]]( # ) - symbolic key name\

### Audio Math 

[[expr~]]( # ) - C-style expressions\
[[fexpr~]]( # )\
[[+~]]( # ) - arithmetic on audio signals\
[[-~]]( # )\
[[*~]]( # )\
[[/~]]( # )\
[[max~]]( # ) - maximum or minimum of 2 inputs\
[[min~]]( # )\
[[clip~]]( # ) - constrict signal to lie between two bounds\
[[sqrt~]]( # ) - approximate (16-bit) square root\
[[rsqrt~]]( # ) - reciprocal square root\
[[q8_sqrt~]]( # ) - fast, cheap 8 bits versions\
[[q8_rsqrt~]]( # )\
[[wrap~]]( # ) - wraparound (fractional part)\
[[fft~]]( # ) - complex forward discrete Fourier transform\
[[ifft~]]( # ) - complex inverse discrete Fourier transform\
[[rfft~]]( # ) - real forward discrete Fourier transform\
[[rifft~]]( # ) - real inverse discrete Fourier transform\
[[pow~]]( # ) - math\
[[log~]]( # )\
[[exp~]]( # )\
[[abs~]]( # )\
[[framp~]]( # ) - estimate frequency and amplitude of FFT components\
[[mtof~]]( # ) - acoustic conversions\
[[ftom~]]( # )\
[[rmstodb~]]( # )\
[[dbtorms~]]( # )\

### General Audio Manipulation 

[[dac~]]( # ) - audio output\
[[adc~]]( # ) - audio input\
[[sig~]]( # ) - convert numbers to audio signals\
[[line~]]( # ) - generate audio ramps\
[[vline~]]( # ) - deluxe line~\
[[threshold~]]( # ) - detect signal thresholds\
[[snapshot~]]( # ) - sample a signal (convert it back to a number)\
[[vsnapshot~]]( # ) - deluxe snapshot~\
[[bang~]]( # ) - send a bang message after each DSP block\
[[samplerate~]]( # ) - get the sample rate\
[[send~]]( # ) - nonlocal signal connection with fanout\
[[receive~]]( # ) - get signal from send~\
[[throw~]]( # ) - add to a summing bus\
[[catch~]]( # ) - define and read a summing bus\
[[readsf~]]( # ) - soundfile playback from disk\
[[writesf~]]( # ) - record sound to disk\

### Audio Oscillators And Tables 

[[phasor~]]( # ) - sawtooth oscillator\
[[cos~]]( # ) - cosine\
[[osc~]]( # ) - cosine oscillator\
[[tabwrite~]]( # ) - write to a table\
[[tabplay~]]( # ) - play back from a table (non-transposing)\
[[tabread~]]( # ) - non-interpolating table read\
[[tabread4~]]( # ) - four-point interpolating table read\
[[tabosc4~]]( # ) - wavetable oscillator\
[[tabsend~]]( # ) - write one block continuously to a table\
[[tabreceive~]]( # ) - read one block continuously from a table\

### Audio Filters 

[[vcf~]]( # ) - voltage controlled filter\
[[noise~]]( # ) - white noise generator\
[[env~]]( # ) - envelope follower\
[[hip~]]( # ) - high pass filter\
[[lop~]]( # ) - low pass filter\
[[slop~]]( # ) - slew-limiting (nonlinear) low pass filter\
[[bp~]]( # ) - band pass filter\
[[biquad~]]( # ) - raw filter\
[[samphold~]]( # ) - sample and hold unit\
[[print~]]( # ) - print out one or more "blocks"\
[[rpole~]]( # ) - raw real-valued one-pole filter\
[[rzero~]]( # ) - raw real-valued one-zero filter\
[[rzero_rev~]]( # ) - time-reversed\
[[cpole~]]( # ) - corresponding complex-valued filters\
[[czero~]]( # )\
[[czero_rev~]]( # )\

### Audio Delay 

[[delwrite~]]( # ) - write to a delay line\
[[delread~]]( # ) - read from a delay line\
[[delread4~]]( # ) - read with a time-varying delay time\
[[vd~]]( # )\

### Subwindows 

[[pd]]( # ) - define a subwindow\
[[inlet]]( # ) - add an inlet to a pd\
[[outlet]]( # ) - add an outlet to a pd\
[[inlet~]]( # ) - signal versions\
[[outlet~]]( # )\
[[clone]]( # ) - multiple copies of a patch\
[[block~]]( # ) - specify block size and overlap, or, if invoked as "switch", also switch subpatches on and off\
[[switch]]( # )\

### Data Templates 

[[struct]]( # ) - define a data structure\
[[drawcurve]]( # ) - draw a curve\
[[filledcurve]]( # )\
[[drawpolygon]]( # ) - draw a polygon\
[[filledpolygon]]( # )\
[[drawtext]]( # ) - draw text\
[[drawsymbol]]( # )\
[[plot]]( # ) - plot an array field\
[[drawnumber]]( # ) - print a numeric value\

### Accessing Data 

[[pointer]]( # ) - point to an object belonging to a template\
[[get]]( # ) - get numeric fields\
[[set]]( # ) - change numeric fields\
[[element]]( # ) - get an array element\
[[getsize]]( # ) - get the size of an array\
[[setsize]]( # ) - change the size of an array\
[[append]]( # ) - add an element to a list\
[[scalar]]( # ) - create a single scalar\

### "EXTRA" (patches and externs in pd/extra) 

[[sigmund~]]( # ) - pitch tracker\
[[bonk~]]( # ) - attack detector\
[[choice]]( # ) - best match of list to templates\
[[hilbert~]]( # ) - phase quadrature / frequency shifting\
[[complex-mod~]]( # )\
[[loop~]]( # ) - phasor~ with S/H on its frequency input\
[[lrshift~]]( # ) - left and right shift (useful with FFT objects)\
[[pd~]]( # ) - run another copy of Pd (for multiprocessing)\
[[stdout]]( # )\
[[rev1~]]( # ) - reverberators\
[[rev2~]]( # )\
[[rev3~]]( # )\
[[bob~]]( # ) - Moog resonant filter model\

### Obsolete 

[[scope~]]( # ) (use tabwrite~ now)\
[[namecanvas]]( # ) (potentially dangerous but no substitute exists yet)\
[[template]]( # ) (use struct now)\
\
\

 
 
 
 
 
 > [[quote]]( # )