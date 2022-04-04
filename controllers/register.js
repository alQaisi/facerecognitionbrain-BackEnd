const handelRegister=async(req,res,User,bcrypt,saltRounds)=>{
    console.log(req.body)
    const {email,name,password}=req.body;
    let hashPass=undefined;
    bcrypt.hash(password,saltRounds).then(hash=>{
        const user=new User({email,name,password:hash,facesNum:0});
        user.save().then(doc=>{
            console.log(doc);
            res.json(doc);
        }).catch(err=>{
            console.log("register",err);
            res.status(400).json("error in register");
        })
    }).catch(err=>{
        console.log("register hash",err);
        res.status(400).json("error in register hash");
    });
    
};
module.exports={
    handelRegister:handelRegister
}