const express = require('express');
const router = express.Router();
const Credential = require('../models/Credential');
const { encrypt } = require('../utils/encryption');
const { decrypt } = require('../utils/encryption');

router.post('/add', async (req, res) => {
  const { website, username, password } = req.body;
  try {
    const encryptedPassword = encrypt(password);
    const newCredential = new Credential({ website, username, password: encryptedPassword });
    await newCredential.save();
    res.status(201).json({ message: 'Credential added successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error adding credential' });
  }
});

router.get('/get', async (req, res) => {
  try {
    const credentials = await Credential.find();
    const decryptedCredentials = credentials.map((cred) => ({
        _id: cred._id,
        website: cred.website,
        username: cred.username,
        password: decrypt(cred.password) // decrypted
      }));
      res.json(decryptedCredentials);
   
  } catch (err) {
    res.status(500).json({ message: 'Error fetching credentials' });
  }
});


router.delete('/delete/:id', async (req, res) => {
  try {
    await Credential.findByIdAndDelete(req.params.id);
    res.json({ message: 'Credential deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting credential' });
  }
});




router.put('/update/:id', async (req, res) => {
  const { website, username, password } = req.body;
  const encryptedPassword = encrypt(password);

  try {
    await Credential.findByIdAndUpdate(req.params.id, {
      website,
      username,
      password: encryptedPassword
    });
    res.json({ message: 'Credential updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating credential' });
  }
});


module.exports = router;
