const Clarifai=require("clarifai");
const FACE_DETECT="d02b4508df58432fbb84e800597b8959";
const app = new Clarifai.App({
    apiKey: 'YOUR_API_KEY'
});

const handleApiCall=(req,res)=>{       
    app.models.predict(FACE_DETECT,req.body.input)
        .then(data=>{
            return res.json(data)
        }).catch(err=>res.status(400).json("Unable to fetch"));
   }
const imagesHandler=(req,res,User)=>{
    const {id,facesNumber}=req.body;
    User.findOneAndUpdate({_id:id},{$inc:{facesNum:facesNumber}},{new:true}).then(user=>{
        res.json(user.facesNum);
    }).catch(err=>{
        console.log("image",err);
        res.status(400).json("error in handling image");
    });     
}
module.exports={
    imagesHandler:imagesHandler,
    handleApiCall:handleApiCall
}