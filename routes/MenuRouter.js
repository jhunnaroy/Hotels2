const epxpress=require('express');
const router=epxpress.Router();
const MenuItmes=require('./../models/MenuItems');

router.post('/',async(req,res)=>{
    try {
        const data=req.body;
        const newMenu= new MenuItmes(data);
        const response=await newMenu.save();
        console.log('menuitems data saved');
        res.status(200).json(response);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({err:'Internal sever error'});
        
    }
})

router.get('/', async(req,res)=>{
    try {
        const data=await MenuItmes.find();
        console.log('menu data fetched');
        res.status(200).json(data);



        
    } catch (error) {
        console.log(error);
        res.status(500).json({err:'Internal server error'});
        
    }
})

router.get('/:tasteType',async(req,res)=>{
    try {

        const tasteType=req.params.tasteType;
        if(tasteType=='sweet'|| tasteType=='spicy' || tasteType=='sour'){
            const response=  await MenuItmes.find({taste:tasteType});
            console.log('data was fetched');
            res.status(200).json(response);
        }
        else{
            res.status(400).json({error:'Invalid taste type'})
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({err:
            "Interanl Server error"
        })
        
    }
})

router.put('/:tasteType', async(req,res)=>{
    try {
        const menuID=req.params.tasteType;
        const updatedMenuItem=req.body;
        const response= await MenuItmes.findByIdAndUpdate(menuID,updatedMenuItem,{
            new:true,
            runValidators:true
        })

          if(!response){
            return res.status(404).json({error:'menu not found'});

        }
        else{
            console.log("data is updated");
            res.status(200).json(response);
        }

        
    } catch (error) {
        console.log(error);
        res.status(500).json({err:" Internal Server error"});
        
    }
})
router.delete('/:tasteType', async(req,res)=>{
    try {
        const menuID=req.params.tasteType;
        const response=await MenuItmes.findByIdAndDelete(menuID);
         if(!response){
            return res.status(404).json({error:'person not found'});

        }
        else{
            console.log("data is updated");
            res.status(200).json({message: 'menuItems Deleted Successfully'});
        } 
        
    } catch (error) {
          console.log(error);
        res.status(500).json({err:"Internal Server error"}); 
        
    }
})
// This is new version 

module.exports=router;

