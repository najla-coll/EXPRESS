const express = require('express')
const app = express()
const port = 3000 



app.set('view engine', 'pug');



const date = require('./middelware/opendayhours')

app.use(date)
  
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