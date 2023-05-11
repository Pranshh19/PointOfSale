const itemModel = require('../models/itemModel');
//Get items
 const getItemController = async (req,res) => { 

    try {
        const items = await itemModel.find()
        res.status(200).send(items)
    } catch(error) {
        console.log(error)
}

};


//add items

const addItemController = async (req, res) => {
    
    try {
        
      const newItem = new itemModel(req.body)
        console.log(req.body);
        await newItem.save()
        res.status(201).send("Item Created Succesfully")

    } catch (error) {
        res.status(400).send('error', error);
        console.log(error)
    }
}


const editItemController = async (req, res) => {
    try {
      const { itemId } = req.body;
      console.log(itemId);
      await itemModel.findOneAndUpdate({ _id: req.body.itemId }, req.body, {
        new: true,
      });
  
      res.status(201).json("item Updated");
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
};
  

//delete item
const deleteItemController = async (req, res) => {
  try {
    const { itemId } = req.body;
    console.log(itemId);
    await itemModel.findOneAndDelete({ _id: itemId });
    res.status(200).json("item Deleted");
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

module.exports = {
  getItemController,
  addItemController,
  editItemController,
  deleteItemController,
};
  