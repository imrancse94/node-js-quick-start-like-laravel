var path = require('path');


// Helper directory
global.AppHelper = require('../app/Utils/Helper'); 

// sendResponse global function 
global.senApiResponse = AppHelper.senApiResponse; 

global.senApiErrorResponse = AppHelper.senApiErrorResponse; 

global.app_status_code = require('../constant').app_status_code; 
