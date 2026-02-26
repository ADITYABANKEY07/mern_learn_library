const stuModel = require("../models/stuModel.js")

const stuSave = async (req, res) => {
    console.log(req.body);
    const {rollno, name, city, fees} = req.body
    const student = await stuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    }) 
    res.send("Data successfully inserted!!!")
}

module.exports = {
    stuSave
}