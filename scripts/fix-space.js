const fs = require('fs');
const dir = '../answers';
fs.readdir(dir,(err,fileList)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(fileList);
    fileList.forEach((fileName)=>{
        if(!fileName.includes(' ')){
            return;
        }
        fs.renameSync(`${dir}/${fileName}`,`${dir}/${fileName.replace(/\s/g,'')}`);
    });
});