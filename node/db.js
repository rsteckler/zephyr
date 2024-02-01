const AWS = require('aws-sdk');
const config = require('./awsconfig.js');
const uuidv1 = require('uuid/v1');

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
    const Item = { };
    Item.id = uuidv1();
    Item.name = name;
    Item.timestamp = now();
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