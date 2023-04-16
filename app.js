const express = require('express');


//creating an express app
const app = express();


//register view engines
app.set('view engine', 'ejs');



//listen for requests
app.listen(3000, ()=>{
   console.log('Port listening at localhost:3000');
});

// app.get('/home',(req,res) => {

//    // res.send("<p>index page</p>")
//    res.sendFile('./views/index.html', {root: __dirname})
// });

app.get('/', (req,res)=>{
   res.render('home');
})

// app.get('/about',(req,res) => {

//    // res.send("<p>About page</p>")
//    res.sendFile('./views/about.html', {root:__dirname})
// });

app.get('/about', (req,res)=>{
   res.render('about');
})


app.get('./blog/create', (req,res)=>{
   res.render('create');
})
// //redirects
// app.get('/about-us', (req,res)=>{
//    res.redirect('/about')
// });


//404 page
// app.use((req,res) => {
//    res.status(404).sendFile('./views/404.html', {root: __dirname})
// });

app.use((req, res)=>{
   res.status(404).render('404');
}); 

