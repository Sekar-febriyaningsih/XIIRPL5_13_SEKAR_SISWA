const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Harap Masukkan Nama'],
    unique: false,
  },
  kelas: {
    type: String,
    required: [true, 'Harap Masukkan kelas'],
    unique: false,
  },
  jurusan: {
    type: String,
    required: [true, 'Harap Masukkan ruang'],
    unique: false,
  },
  ruang: {
    type: String,
    required: [true, 'Harap Masukkan ruang'],
    unique: false,
  },
  umur: {
    type: Number,
    required: [true, 'Harap Masukkan umur'],
    unique: false,
  },

});

module.exports = mongoose.model('User', UserSchema);