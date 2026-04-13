import express from "express"
const route = express.Router()
import userController from "../controller/userController.js"

route.get("/getinfosession", userController.get_session_info)
route.get("/displayinfo", userController.display_info)

export default route