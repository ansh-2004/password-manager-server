const mongoose = require('mongoose');

const CredentialSchema = new mongoose.Schema({
  website: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true } 
});

module.exports = mongoose.model('Credential', CredentialSchema);
