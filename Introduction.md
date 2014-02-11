### Getting Started

This first tutorial will be using the [`template.inow.js`](scripts/template.inow.js) file to explain the basics of the scripts.

This is generally how Perceptive shows their initial script for running in Workflow. I have made a few minor changes to their format for simplicity.

At the very top of this script there is a commented section for the script name, author, creation date, updated date, and ImageNow version.

Below the general information about the script there is a summary for giving an explanation of what the script is designed to do, a Mod Summary for giving a description of who changed what and why, and a Business Use used to give the business justification of the script.

Past that section of comments are the global definitions starting with the `#include` which is including scripts that come in the STL Library for ImageNow. In this script there is only one `#include` however you can have many different includes.  

Below the includes in the configuration section are the global definitions to the Logging variables, the first one is `#define LOG_TO_FILE` this is a boolean variable (`true` or `false`) that defines if the debugging statements in the code go to the log file or if they go to the `stdout`, standard output, which would only be used if you were running the script in INTool.
