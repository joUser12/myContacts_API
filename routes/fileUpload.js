const express = require("express");
const { upload } = require("../controller/fileUpload");
const router = express.Router();

// router.route("").post(upload);
router.post('/upload', upload);
router.get("/upload", upload);

module.exports = router;