const epxpress=require('express');

const app=epxpress();
const db=require('./db')



const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send(" Welcome to my Hotel so How can helo you please tell me");
}
)
// import the router
const personRouter=require('./routes/PersonRoutes');
const menuRouter=require('./routes/MenuRouter');
app.use('/person', personRouter);
app.use('/menuitems',menuRouter);






const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`);
});

