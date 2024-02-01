const AWS = require('aws-sdk');
const config = require('./awsconfig.js');
const uuid = require('uuid');

const getLeaderboard = function () {
    AWS.config.update(config.aws_remote_config);

    const docClient = new AWS.DynamoDB.DocumentClient();

    const params = {
        TableName: config.aws_table_name
    };

    docClient.scan(params, function (err, data) {

        if (err) {
            console.log(err)
        } else {
            const { Items } = data;
            return Items;
        }
    });
}

const addLeader = function (name) {
    AWS.config.update(config.aws_remote_config);
    const docClient = new AWS.DynamoDB.DocumentClient();
    
    const start = new Date(2024, 1, 1, 9, 0, 0, 0);
    const now = new Date();
    const delta = now - start;
        
    const Item = { };
    Item.id = uuid.v1();
    Item.name = name;
    Item.timeDelta = delta
    var params = {
        TableName: config.aws_table_name,
        Item: Item
    };

    // Call DynamoDB to add the item to the table
    docClient.put(params, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log("added leader: " + data);
        }
    });
}

module.exports = {
    getLeaderboard,
    addLeader
}