const express =require("express");
const router =express.Router(); 
const Campaigns = require('../models/campaignsModel');

router.post('/', async (req, res) => {
  try {
    const newCampaign = new Campaigns({
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      amount: req.body.amount,
      amountCollected: req.body.amountCollected,
      endDate:req.body.endDate
    });

    console.log('Creating campaign:', newCampaign);

    const savedCampaign = await newCampaign.save();
    res.status(201).json(savedCampaign);
  } catch (err) {
    console.error('Error creating campaign:', err);
    res.status(500).json({ error: 'Failed to create campaign' });
  }
});
router.get('/', async (req, res) => {
  try {
    const campaigns = await Campaigns.find({});
   return res.status(200).json({
    count:campaigns.length,
    data:campaigns});
  } catch (error) {
    console.error('Error creating campaign:', err);
    res.status(500).json({ error: 'Failed to create campaign' });
}
});


/*router.get('/:id', async (req, res) => {
  try {
    const campaigns = await Campaigns.find({});
   return res.status(200).send(campaigns);
  } catch (error) {
    console.error('Error creating campaign:', err);
    res.status(500).json({ error: 'Failed to create campaign' });
}
 
});
*/
  //Route for Delete a Campaign
  router.delete("/:id",async(req,res,)=>{
try {
  const{id} =req.params;
  const result =await Campaigns .findbyIdAndDelete(id);
  if (!result){
    return res.status(404).json({message:"Campaign not found"});
  }
  return res .status(200).send({message:'Campaign deleted successfully'});
  
} catch (error) {
  console.log(error.message);
  res.status(500).send({message:console.error.message});
  
}
  });
  module.exports = router;