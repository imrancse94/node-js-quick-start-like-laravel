module.exports = {
    '/auth': require('./protectedroute'),
    '/': require('./publicroute')
}