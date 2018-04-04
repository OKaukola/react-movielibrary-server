const mongoose = require('mongoose'),
      Schema = mongoose.Schema;


const MovieSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  imdb: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Movies', MovieSchema);