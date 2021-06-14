const express = require('express')
const app = express()
const port = 3000 



app.set('view engine', 'pug');
var day;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
if(new Date().getDay() === 0 ||new Date().getDay() === 6) {
     app.get('/',(req,res,next)=>{
         res.render('close')
         next()
     })
    
    } 
    console.log(new Date().getDay())
app.get('/',(req,res)=>{
   
    res.render('home')
   
})
app.get('/ourservices',(req,res)=>{
    res.render('our_services')
})
app.get('/contactus',(req,res)=>{
    res.render('contact_us')
})
app.get('/boot',(req,res)=>{
    res.render('boot')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})