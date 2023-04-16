const fs = require('fs');


// writing files 
// fs.writeFile('./blog.txt', "Hello everyone", ()=>{
//    console.log("file was written successfully");
//    fs.readFile("./blog.txt", (err, data) => {
//       if (err) throw err;
//       console.log(data.toString());
//    });
// });

// reading files 
// fs.readFile("./blog.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });


//directories
// if (!fs.existsSync("./blog")){
//    fs.mkdir("./blog", (err) => {
//       if (err) throw err;
//       console.log("directory created");
//    }); 
// }else{
//    fs.rmdir("./blog", (err) => {
//       if (err) throw err;
//       console.log("directory has been removed");
//    });
// }


//deleting files
// if (fs.existsSync("./blog1.txt")){
//    fs.unlink("./blog1.txt", (err) =>{
//       if (err) throw err;
//       console.log("file was deleted successfully");
//    });
// }else{
//    fs.writeFile("./blog1.txt", "New file", (err)=>{
//       if (err) throw err;
//       console.log("Added file successfully")
//       fs.readFile('./blog1.txt', (err, data) => {
//          if (err) throw err;
//          console.log(data.toString());
//       });
//    })
// }




//creating a readstream
const readstream = fs.createReadStream('./blog/document.txt', {encoding: 'utf8'});

//creating a writestream
const writestream = fs.createWriteStream("./blog/document2.txt");

readstream.on('data', (chunk) => {
   console.log('--------NEW CHUNK--------');
   console.log(chunk);

   writestream.write('\n------NEW CHUNK----\n');
   writestream.write(chunk);
});

console.log("last line"); 
