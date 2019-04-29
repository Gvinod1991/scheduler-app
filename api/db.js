const mongoose=require('mongoose');

let _db;
let db_url='mongodb://localhost:27017/scheduler-app';
mongoose.connect(db_url,{useNewUrlParser:true, useCreateIndex: true});
mongoose.Promise=global.Promise;

_db=mongoose.connection;//assign db connection to _db global variable

_db.on('error', console.error.bind(console, 'MongoDB connection error:'));


exports.module={
    _db : _db
}