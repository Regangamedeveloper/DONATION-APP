const express =require("express");
const router =express.Router(); 
const {v4:uuidv4} =require("uuid");

router.get("/",(req,res,next)=>{
    res.status(200).json(
      {
        statusCode:200,
        status:"success",
        clientId:uuidv4(),
        message:"Regangamedeveloper",
      });
  });
  router.post("/",(req,res,next)=>{
    res.status(200).json(
      {
        statusCode:200,
        status:"success",
        clientId:uuidv4(),
        message:"Regangamedeveloper",
      });
  });
  router.put("/",(req,res,next)=>{
    res.status(200).json(
      {
        statusCode:200,
        status:"success",
        clientId:uuidv4(),
        message:"Regangamedeveloper",
      });
  });
  router.delete("/",(req,res,next)=>{
    res.status(200).json(
      {
        statusCode:200,
        status:"success",
        clientId:uuidv4(),
        message:"Regangamedeveloper",
      });
  });
  module.exports = router;