const express = require('express');
const Tool = require('../models/moviesschema');
const mongoose = require("mongoose");
const router = express.Router();

router.get ('/:slug', async(req,res)=>{
  const tools = await Tool.findOne({slug:req.params.slug})
  if(tools==null){res.redirect('/')}
  res.render('movies', {tools:tools})
})

router.post('/',(req,res)=>{
  const tools = new Tool({
    title:req.body.title,
    des:req.body.des
  })

tools.save()
.then(result=>{
  console.log(result)
  res.status(200).json({
  newTool:result
  })
})
.catch(err=>{
  console.log(err);
  res.status(500).json({
    error:err
  })
})

  })
module.exports = router;
