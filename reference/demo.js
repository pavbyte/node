const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname,'/test'),{},function(err){
//     if(err) throw err;
//     console.log('directory created') })


    // fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hellduniya o world',function(err){
    //     if(err) throw err;
    //     console.log('file written reated');

    //     fs.appendFile(path.join(__dirname,'/test','hello.txt'),'test hi toh zindagi hai', err => 
    //     {
    //         if (err) throw err;
    //         console.log('appending complete');
    //     })
    // })

    fs.readFile(path.join(__dirname,'/test','hello.txt'), 'utf8', (err,data) => {
        if(err) throw err;
        console.log(data)
    })