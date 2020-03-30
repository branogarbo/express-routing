const express = require('express');
const app = express();
const port = 3000;

app.listen(port, console.log(`listening on port ${port}`));
app.set('view engine','ejs');

app.get('/:user/search/:item?', (req,res)=>{
  let params = req.params;

  let ejsparams = {
    title: 'testing out ejs',
    user: params.user,
    item: params.item
  };

  params.item ? res.render('pages/index', ejsparams) : res.send('please enter item to search for');
});