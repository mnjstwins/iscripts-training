/********************************************************************************
	Name:           test_script.inow.js
	Author:         Nikko Miu
	Created:        01/31/2014
	Last Updated:   01/31/2014
	For Version:    6.x
---------------------------------------------------------------------------------
	Summary:
		
		
	Mod Summary:
	

	Business Use:

		
********************************************************************************/

// ********************* Include additional libraries *******************

// STL Packages
#include "../script/STL/packages/Logging/iScriptDebug.js";

// *********************         Configuration        *******************

#define LOG_TO_FILE         true    // false - log to stdout if ran by intool, true - log to inserverXX/log/ directory
#define DEBUG_LEVEL         5       // 0 - 5.  0 least output, 5 most verbose
var EXECUTION_METHODS = 	["WORKFLOW"]; //WORKFLOW, INTOOL, TASK, EFORM, EMA

// *********************       End  Configuration     *******************

// ********************* Initialize global variables ********************
var debug;

function main()
{
	// This will create a log file in the inserver6\log directory which
	// will be named test_script.inow_MMDDYYYY.log
	debug = new iScriptDebug("USE SCRIPT FILE NAME", LOG_TO_FILE, DEBUG_LEVEL);
	
	try
	{
		if (!debug.checkExecution(EXECUTION_METHODS))
		{
			debug.log('CRITICAL', 'This iScript is running as [%s] and is designed to run from [%s]\n', debug.getExecutionMethod(), EXECUTION_METHODS)
			return false;
		}
		
		// Your code goes here
		
	}
	catch (e)
	{
		if(!debug)
		{
			printf("\n\nFATAL iSCRIPT ERROR: %s\n\n", e.toString());
		}
		else
		{
			debug.setIndent(0);
			debug.log("CRITICAL", "***********************************************\n");
			debug.log("CRITICAL", "***********************************************\n");
			debug.log("CRITICAL", "**                                           **\n");
			debug.log("CRITICAL", "**    ***    Fatal iScript Error!     ***    **\n");
			debug.log("CRITICAL", "**                                           **\n");
			debug.log("CRITICAL", "***********************************************\n");
			debug.log("CRITICAL", "***********************************************\n");
			debug.log("CRITICAL", "\n\n\n%s\n\n\n", e.toString());
			debug.log("CRITICAL", "\n\nThis script has failed in an unexpected way.  Please\ncontact the original author of this script within\nyour organization.  For additiona support,\n contact Perceptive Software Customer Support at 800-941-7460 ext. 2\nAlternatively, you may wish to email support@perceptivesoftware.com\nPlease attach:\n - This log file\n - The associated script [%s]\n - Any supporting files that might be specific to this script\n\n", _argv[0]);
			debug.log("CRITICAL", "***********************************************\n");
			debug.log("CRITICAL", "***********************************************\n");
			if (DEBUG_LEVEL < 3 && typeof(debug.getLogHistory) === "function")
			{
				debug.popLogHistory(11);
				debug.log("CRITICAL", "Log History:\n\n%s\n\n", debug.getLogHistory());
			}
		}
	}
	finally
	{
		if (debug) debug.finish();
		return;
	}
}

// ********************* Function Definitions **********************************

//-- last line must be a comment --