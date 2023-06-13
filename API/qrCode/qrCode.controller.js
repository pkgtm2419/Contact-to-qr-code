const express = require('express');
const router = express.Router();
var multer = require('multer');
const service = require("./qrCode.service");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, '../api/uploadFile');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage });

router.get('', getList);
router.get('/:id', getData);
router.post("/create", createData);
router.get("/delete/:id", deleteData);
router.post("/update/:id", updateData);
router.post("/upload", upload.array('images'), uploadData);

function getList(req, res) {
  service.getContactList(req, (error, result) => {
    return error ? res.send(error) : res.send(result);
  });
}

function deleteData(req, res) {
  service.deleteContact(req.params.id, req, (error, result) => {
    return error ? res.send(error) : res.send(result);
  });
}

function updateData(req, res) {
  service.updateContact(req.params.id, req, (error, result) => {
    return error ? res.send(error) : res.send(result);
  });
}

function uploadData(req, res) {
  service.upload(req, (error, result) => {
    return error ? res.send(error) : res.send(result);
  });
}

function getData(req, res) {
  service.getContactData(req.params.id, req, (error, result) => {
    return error ? res.send(error) : res.send(result);
  });
}

function createData(req, res) {
  service.createContactData(req, (error, result) => {
    return error ? res.send(error) : res.send(result);
  });
}

module.exports = router;