require('dotenv').config();
const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const PORT  = 7000;
const userRoute = require('./routes/user.route');

//Database file
require('./databases/config');
//Create a new morgan logger middleware function using the given format and options
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Public folder
app.use(express.static('public'));
app.use(cookieParser(process.env.SECRET_KEY));

app.get('/',(req,res)=>{
   res.send("Hello world");
});
app.use('/api',userRoute);

app.listen(PORT,()=>{console.log(`A nodejs server run on port ${PORT}`)});
