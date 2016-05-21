var VKApi = require('node-vkapi'),
    ProgressBar = require('progress'),
    argv = require('optimist').argv;

// Default
var Set = {
    'appId': '5470761',
    'appSecret': 'H9BIwL9W3KmRLQj5wVBm',
    'owner_id': argv.oid || '-34708506',
    'count': argv.count || 1,
    'login': argv.login || '+380677560565',
    'pass': argv.pass
};

var VK = new VKApi({
    app: {
        id: Set.appId,
        secret: Set.appSecret
    },
    auth: {
        login: Set.login,
        pass: Set.pass
    },
    version: '5.40'
});
