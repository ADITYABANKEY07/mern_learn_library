const UploadImage = async (req, res) => {
    console.log("File Uploaded")
    res.send("File Save")
}

module.exports = {
    UploadImage
}