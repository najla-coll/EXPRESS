let day = new Date().getDay();
let hour = new Date().getHours();

function  date (req,res,next){
    if(day > 0  &&  day < 6  &&  9 < hour && hour < 17){
        next()
    }
    else{
        res.send('<h1> we are closed</h1>')
    }
    
}

module.exports = date