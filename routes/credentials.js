const express = require('express');
const router = express.Router();
const Credential = require('../models/Credential');
const bcrypt = require('bcryptjs');


router.post('/add', async (req, res) => {
  const { website, username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newCredential = new Credential({ website, username, password: hashedPassword });
    await newCredential.save();
    res.status(201).json({ message: 'Credential added successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error adding credential' });
  }
});

router.get('/get', async (req, res) => {
  try {
    const credentials = await Credential.find();
    res.json(credentials);
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
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await Credential.findByIdAndUpdate(req.params.id, {
      website,
      username,
      password: hashedPassword
    });
    res.json({ message: 'Credential updated' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating credential' });
  }
});

module.exports = router;
