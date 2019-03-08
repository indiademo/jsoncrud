var user = require('./userctrl');
module.exports = function(app) {
    app.get('/test/api/getUser', user.getUser);
    app.post('/test/api/addUser', user.addUser);
    app.post('/test/api/getSingleUser', user.getSingleUser);
}