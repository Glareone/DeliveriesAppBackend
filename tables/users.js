var users = module.exports = require('azure-mobile-apps').table();

users.read(function (context) {
    return context.execute();
});

users.insert(function (context) {
    return context.execute();
});

users.update(function (context) {
    return context.execute();
});

users.delete(function (context) {
    return context.execute();
});
