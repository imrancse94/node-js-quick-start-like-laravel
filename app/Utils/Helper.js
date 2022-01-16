module.exports = {

    senApiResponse:(response,status_code,message,data)=>{
        return response
                    .set('Content-Type', 'application/json')
                    .status(200)
                    .json({
                        status_code:status_code,
                        message:message,
                        data:data
                    });
    },
    senApiErrorResponse:(response,status_code,message,data)=>{
        return response
                    .set('Content-Type', 'application/json')
                    .status(200)
                    .json({
                        status_code:status_code,
                        message:message,
                        errors:data
                    });
    }
}