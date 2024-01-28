const UserRegister = require("./registerSchema")


const register =  async(req,res)=>{
    try{
        const{firstName,lastName,email,password,phoneNumber} = req.body // collecting data from users

        const user = await UserRegister.create({
            firstName: firstName,
            lastName : lastName,
            email:email,
            password:password,
            phoneNumber:phoneNumber
        })
        if(user){
            res.status(200).json({
                message:"User registration created",
                data:user
            })
        }else{
            res.status(400).json({
                message:"Not created"
            })
        }
    }catch(err){
        console.log('Error in Register', err)
        res.status(404).json({
            message: 'Server error'
        })
    }
}


module.exports = register