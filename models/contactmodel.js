'user strict';
const dbConn = require('../config/db');

var Contact = function (contact) {
    this.first_name = contact.first_name;
    this.last_name = contact.last_name;
    this.email = contact.email;
    this.mobile_number = contact.mobile_number;
    this.data_store = contact.data_store;
}
Contact.create = function (newcon, result) {
    dbConn.query("INSERT INTO contactdetails set ?", newcon, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
}
Contact.findById = function (id, result) {
    dbConn.query("Select * from contactdetails where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
}
Contact.update = function (id, contact, result) {
    dbConn.query("UPDATE contactdetails SET first_name=?,last_name=?,email=?,Mobile_number=? WHERE id = ?", [contact.first_name, contact.last_name, contact.email, contact.mobile_number, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
}
Contact.delete = function (id, result) {
    dbConn.query("DELETE FROM contactdetails WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
}

module.exports = Contact;