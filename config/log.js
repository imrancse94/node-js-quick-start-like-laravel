const { createLogger, format, transports, config } = require('winston');
const { combine, timestamp, json } = format;

const today = getSystemCurrentDateTime();

const logger = createLogger({
    levels: config.syslog.levels,
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        json()
      ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: `logs/${today}-app.log` })
      ]
 });

 module.exports = logger;