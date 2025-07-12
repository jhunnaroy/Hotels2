const epxpress=require('express');
const router=epxpress.Router();
const Person=require('./../models/Person');


router.post('/', async(req,res)=>{
   try {
    
     const data=req.body;
     const newPerson=new Person(data);
     // save the  new person to the databases
      const response=await  newPerson.save();
      console.log('data saved');
      res.status(200).json(response)

   } catch (err) {
    console.log(err);
    res.status(500).json({error:" Internal sever error"});
    
   }
})
router.get('/',async(req,res)=>{
    try {
        const data=await Person.find();
        console.log('data fetched');
        res.status(200).json(data);

        
    } catch (error) {
        console.log(error);
        res.status(500).json({err:"internal server error"});
        
    }
})

router.get('/:worktype',async(req,res)=>{
    try {
        const workType=req.params.worktype;
        if(workType=='chef' || workType=='manager' || workType=='waiter'){
            const response= await Person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response);
        }
        else{
            res.status(400).json({error:'Invalid wrok type'})
        }
        
    } catch (error) {
        
        console.log(error);
        res.status(500).json({err:'Internal Server Error'});
    }
}
)

router.put('/:id',async(req,res)=>{
    try {
        const personId=req.params.id;
        const updatePersonData=req.body;
        const response=await Person.findByIdAndUpdate(personId,updatePersonData,{
            new:true,
            runValidators:true,  // run  mongoose validation
        })
        if(!response){
            return res.status(404).json({error:'person not found'});

        }
        else{
            console.log("data is updated");
            res.status(200).json(response);
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({err:"Internal Server error"});
        
    }
})
router.delete('/:id',async(req,res)=>{
    try {
        const personId=req.params.id;
        const response=await Person.findByIdAndDelete(personId);

         if(!response){
            return res.status(404).json({error:'person not found'});

        }
        else{
            console.log("data is updated");
            res.status(200).json({message: 'person Deleted Successfully'});
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({err:"Internal Server error"});
        
    }
})

module.exports=router;
