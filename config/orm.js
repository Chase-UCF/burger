var connection = require("./connection.js");

var orm = {
    selectAll: function(tableName, callback) {
        connection.query("SELECT * FROM ??", [tableName], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: function(tableName, obj, callback) {
        connection.query(
            "INSERT INTO ?? SET ?", [tableName, obj],
            function(err, result) {
                if (err) throw error;
                callback(result);
            });
    },
    updateOne: function(tableName, condition, obj, callback) {
        connection.query("UPDATE ?? SET ?? WHERE ??", [tableName, obj, callback], function(err, results) {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;