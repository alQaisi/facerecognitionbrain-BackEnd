const signinHandler=(req,res,User,bcrypt)=>{
    const {email,password}=req.body;
    User.findOne({email}).then(user=>{
        if(user){
            bcrypt.compare(password,user.password).then(result=>{
                if(result)
                    res.json(user);
                else
                    res.json("Wrong data");
            }).catch(err=>{
                console.log("compare",err);
                res.status(400).json("err in compare");
            });
        }else
            res.json("Wrong data")
    }).catch(err=>{
        console.log("signin",err);
        res.status(400).json("error in signin");
    });
};
module.exports={
    signinHandler:signinHandler
}