const fs = require('fs');

fs.writeFile('./node.txt', 'Linea Uno', function (error) {
    if(error){
        console.log(err)
    }
    console.log("File created")
});

console.log('Last codeline');

