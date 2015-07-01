'use strict';
var config = require('../config/local.json');

exports.getClientConfig = function (req, res, next) {
    return res.json(200, {
        awsConfig: {
            bucket: config.BUCKET,
            awsKeyId: config.AWS_KEY_ID,
            region: config.REGION
        }
    });
};
