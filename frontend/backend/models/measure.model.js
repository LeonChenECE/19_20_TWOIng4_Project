const mongoose = require('mongoose');

const measureSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true
    },
    creationDate : {
      type: Date,
      required: true
    },
    sensorID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  }
);

module.exports = mongoose.model('Measure', measureSchema);