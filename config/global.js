// Helper directory
global.AppHelper = require('../app/Utils/Helper'); 

// sendResponse global function 
global.sendApiResponse = AppHelper.sendApiResponse; 

global.sendApiErrorResponse = AppHelper.sendApiErrorResponse;

global.getSystemCurrentDateTime = AppHelper.getSystemCurrentDateTime; 

global.setInfoLog = AppHelper.setInfoLog; 

global.setDateTimeFormat = AppHelper.setDateTimeFormat; 

global.app_status_code = require('./constant').app_status_code; 
