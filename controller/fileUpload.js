const uploadFile = require("../middleware/fileUpload");
const asyncHandler = require("express-async-handler")
const upload =  asyncHandler( async (req, res) => {
  try {
    await uploadFile(req, res);
    console.log(req)

    


    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }
    const { filename, path, size, mimetype } = req.file;
    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${filename}`;

    res.status(200).send({
      name:  filename,
      url:fileUrl
    });
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
})



module.exports = { upload };
