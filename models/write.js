const mongoose =require("mongoose");
const Schema = mongoose.Schema;
const writerSchema = new mongoose.Schema({
    
    title: {
     type:   String,
     required: true
    },
    details: {
        type:   String,
        required: true
       },
       date: {
        type: Date,
        default: Date.now
      }
});

module.exports= mongoose.model("Writer",writerSchema)