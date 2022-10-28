'use strict';

const Contact = require('../models/contactmodel');

exports.create = function(req, res) {
    const new_contact= new Contact(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Contact.create(new_contact, function(err, contact) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Contact added successfully!",data:contact});
        });
    }
}


exports.findById = function(req, res) {
    Contact.findById(req.params.id, function(err, contact) {
        if (err)
        res.send(err);
        res.json(contact);
    });
}


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Contact.update(req.params.id, new Contact(req.body), function(err, contact) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Contact successfully updated' });
        });
    }
  
}


exports.delete = function(req, res) {
    Contact.delete(req.params.id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Contact successfully deleted' });
    });
};

