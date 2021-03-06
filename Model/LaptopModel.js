var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  Employee_Id: {
    type: String,
  },
  Asset_Number: {
    type: String,
  },
  Name: {
    type: String,
  },

  MAC_Address: {
    type: String,
  },
  ChargerAsset_Number: {
    type: String,
  },
  Comment: {
    type: String,
  },
});

module.exports = mongoose.model('Tasks2', TaskSchema);