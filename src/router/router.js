const express = require('express');
const router = express.Router()
const { getUser, addUser, updateUser, deleteUser, getUserById } = require('../controllers/user.controller')

router.get('/', (req, res) => {
  res.send('Hello World!')
});

router.get('/getSiswa', getUser)

router.get('/getSiswa/:id', getUserById)

router.post('/addSiswa', addUser)

router.put('/updateSiswa/:id', updateUser)

router.delete('/deleteSiswa/:id', deleteUser)

module.exports = router