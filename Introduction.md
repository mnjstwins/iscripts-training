### Getting Started

This first tutorial will be using the [`template.inow.js`](scripts/template.inow.js) file to explain the basics of the scripts.

This is generally how Perceptive shows their initial script for running in Workflow. I have made a few minor changes to their format for simplicity.

At the very top of this script there is a commented section for the script name, author, creation date, updated date, and ImageNow version.

Below the general information about the script there is a summary for giving an explanation of what the script is designed to do, a Mod Summary for giving a description of who changed what and why, and a Business Use used to give the business justification of the script.

Past that section of comments are the global definitions starting with the [`#include`](scripts/template.inow.js#LC21) which is including scripts that come in the STL Library for ImageNow. In this script there is only one `#include` however you can have many different includes.  

Below the includes is the configuration section. This is where the global definitions to the Logging variables and some other variables related to configuration of the script. The first one in this list is [`#define LOG_TO_FILE`](scripts/template.inow.js#LC24), this is a boolean variable (`true` or `false`) that defines if the debugging statements in the code go to the log file or if they go to the `stdout`, standard output, which would only be used if you were running the script in INTool. The second logging definition is `#define DEBUG_LEVEL`, this variable takes a numerical value between 0 and 5 ([level definitions below](#debug-level-definitions)). The last declaration in the configuration section is the execution method. The execution method defines which way(s) the script can be run in ImageNow ([method definitions below](#execution-method-definitions)).

The [last section](scripts/template.inow.js#LC31) before you get into the main function is where you declare the global variables. There is currently one variable listed there, the `debug` variable. The debug variable will be used later, it is helpful in debugging code by logging results of variables or other key points in your script to a file in the `inserver6\log` directory.

The [main function](scripts/template.inow.js#LC34) is a required function that gets called when the script is called in ImageNow. The main function has no parameters. However, there are global variables that get defined by ImageNow depending on how the script was called in the system.

Debugging can be important for showing warnings and errors in a production system. It is also very useful in the development of the script for showing various debug information to help find problems in the script while you are creating it. [Instanciating the debug variable](scripts/template.inow.js#LC37) should be the first part of the main function so that you can always do debugging throughout the script. (**Note:** There are also some of the ImageNow functions that need to have the debug variable globally defined in order to work correctly.) The first of three parameters for the declaration of the `new iScriptDebug` are `"USE SCRIPT FILE NAME"` which says that the debug variable will be sending the data to a new log file with the script file name and `_MMDDYYYY.log` for the current date. The second parameter, `LOG_TO_FILE`, is a reference back to the `#define LOG_TO_FILE` (with the true or false value). The final of the three parameters, `DEBUG_LEVEL`, which is a reference back to `#define DEBUG_LEVEL` (with a 0-5 value). There are additional parameters to pass the `new iScriptDebug` which include things like the max log size, a header, footer, splitting them by workflow queue name, etc.

### Debug Level Definitions

* 0 - No output
* 1 - `CRITICAL` output
* 2 - `ERROR` output
* 3 - `WARNING` output
* 4 - `INFO` output
* 5 - `DEBUG` output

### Execution Method Definitions

* `WORKFLOW` - Run from a workflow queue as (inbound, within queue, outbound) action
* `INTOOL` - Run from INTool (the command line tool on the server)
* `TASK` - Run from tasks
* `EFORM` - Run as an eForm action
