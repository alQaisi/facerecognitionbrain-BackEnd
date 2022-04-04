const express=require('express');
const app=express();
const bcrypt=require("bcrypt");
const saltRounds=10;
const cors=require('cors');
const register = require('./controllers/register');
const signin=require('./controllers/signin')
const images=require('./controllers/images');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://<your-name>:<password>@<your-cluster>.mongodb.net/<Database Name>',{useNewUrlParser:true});
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        match:/.+\@.+\..+/,
        unique:true
    },
    name:{
        type:String,
        required:true,
        minlength:[3,"That's to small to ba a name"],
        maxlength:[30,"Isn't a big name?"],
    },
    password:{
        type:String,
        required:true,
    },
    facesNum:Number
});
const User=mongoose.model('User',userSchema);

app.get('/',(req,res)=>{
    res.send("it's working");
});
app.get('/profile/:id',(req,res)=>{ 
    const {id}=req.params;
    db.select('*').from('users').where({id}).then(user=>{
        if(user.length)
            res.json(user[0]);
        else
            res.status(400).json('Not Found')
    }).catch(err=>res.status(400).json('Not Found'));
        
});
app.put('/image',(req,res)=>{images.imagesHandler(req,res,User)});
app.post('/signin',(req,res)=>{signin.signinHandler(req,res,User,bcrypt,)});
app.post('/register',(req,res)=>{register.handelRegister(req,res,User,bcrypt,saltRounds)});
app.post('/imageurl', (req, res) => { images.handleApiCall(req, res)})
app.listen(process.env.PORT || 4000,()=>{
    console.log(`app is running on port ${process.env.PORT}`)
});