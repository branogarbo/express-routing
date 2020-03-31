const express = require('express');
const app = express();
const port = 3000;

app.listen(port, console.log(`listening on port ${port}`));

app.get('/:user/search/:item?', (req,res)=>{
  let p = req.params;

  p.item ? res.send(`${p.user} is looking for ${p.item}`) : 
    res.send('please enter item to search for');
});