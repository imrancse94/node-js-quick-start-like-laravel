const moment = require('moment');



module.exports = {
    sendApiResponse: (response, status_code, message, data) => {
        const response_data = {
            status_code: status_code,
            message: message,
            data: data
        };
        //setInfoLog(response_data);
        return response
            .set('Content-Type', 'application/json')
            .status(200)
            .json(response_data);
    },
    sendApiErrorResponse: (response, status_code, message, data) => {
        // if(data){
        //     data = JSON.parse(JSON.stringify(data));
        // }
        const response_data = {
            status_code: status_code,
            message: message,
            errors: data
        };
        //setInfoLog(response_data);
        return response
            .set('Content-Type', 'application/json')
            .status(200)
            .json(response_data);
    },
    getSystemCurrentDateTime(format = 'YYYY-MM-DD') {
        return moment().format(format);
    },
    setDateTimeFormat(date, format = 'YYYY-MM-DD') {
        return moment(date).format(format);
    },
    setInfoLog(data) {
        const logger = require('./../../config/log');
        // data = JSON.stringify(data)
        logger.info(data)
    }
}