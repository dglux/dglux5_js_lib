# dglux5_js_lib

use this library as a dglux project

create a `js` project in `files/proj` directory and copy all files into it


### examples

open the js project in dglux, then open any dg5 in examples folder to check the examples

### use js lib in other project

In your main project, right click the lib folder in file tree to imported js project as library, you will see a blank js widget template in the widget bar, drag it to the stage and change the js symbol field to the js file that you define your widget (the default grey background can be removed)


### import 3rd party module

DGLux use its own AMD style module loader which require some additional js change if you need to load 3rd party modeuls like three.js or D3

Please check the example at `examples/threejs`, it imports three.js from the `three` directory, and in the end of `three.r82.min.js`, we need these 3 lines to notify DGLux that the module is loaded.
```javascript
define([],function(){
	return THREE;
});
```
