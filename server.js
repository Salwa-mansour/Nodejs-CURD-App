const express =require('express');
const dotenv =require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

 dotenv.config({path:'config.env'})
const PORT =process.env.PORT ||8080;

//log requests
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}));

// set view engine
app.set("view engine","ejs");
//app.set("views", path.resolve(__dirname, "views/ejs"))

//load assets the '/css' is the virtual path we gonna use in files
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/images',express.static(path.resolve(__dirname,"assets/images")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));


app.get('/',(req,res)=>{
   res.render('index');
})

app.listen(PORT,()=>{
    console.log(`Server is running on http:\\localhost${3000}`)
})