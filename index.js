// const http = require('http');
// const port = 8000;


// function requestHandler(req, res){
//     console.log(req.url);
     
//     res.write('Raghav goyal')
//     res.end();
// }
// // we have to pass function name in create server
// const server = http.createServer(requestHandler);

// // function requestHandler(req, res){
// //     console.log(req.url);
     
// //     res.write('acccc')
// //     res.end();
// // }


// server.listen(port, function(err){
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log("Server is up and running on port:", port);
// });

// now we create a express server
//here we declaring expree
const express=require('express');
const path=require('path');
// here we bind the expresswith app so that we can used it
const app=express();
const port=8000;
// for response

// setting up ejs templete;
app.set('view engine','ejs');
// setting up pathof views folder
app.set('views',path.join(__dirname,'views'));
// rendering ejs file

app.use(express.urlencoded());
// express.static is a inbuilt middleware which is used to acesses static file
app.use(express.static('assets'));
var contactList = [
    {
        name: "Arpan",
        phone: "1111111111"
    },
    {
        name: "Tony Stark",
        phone: "1234567890"
    },
    {
        name: "Coding Ninjas",
        phone: "12131321321"
    }
]

app.get('/', function(req, res){
    return res.render('home',{
        title: "Contact List",
        contact_list: contactList
    });
})
// app.get('/', (req, res) => {
//     console.log(req)
//     return res.render('home');
//   })
app.post('/create-contact', function(req, res){
    // these are the two way of pushing data in contact list array
    
    // contactList.push({
        
    //     name: req.body.name,
    //     phone: req.body.phone,
    // })
    contactList.push(req.body);
    return res.redirect('/');

});
app.listen(port,function(err){
    if(err){
        console.log("error is running on port")
    }else{
        console.log('yup code is running',port);
    }
})
