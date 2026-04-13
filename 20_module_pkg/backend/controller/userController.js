class userController{
  static get_session_info=async(req,res)=>{
    res.send("Welcome to My Session")
  }
  static display_info=async(req,res)=>{
    res.send("Welcome to My Display")
  }
}

export default userController
