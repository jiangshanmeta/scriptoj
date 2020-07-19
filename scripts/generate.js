const fs = require('fs');
const difficultyMap = require('./config').difficultyMap;
const questions = require('./metaData.json');

function getLocalAnswers(){
    return new Promise((resolve)=>{
        fs.readdir('../answers',(err,fileList)=>{
            if(err){
                console.log(err);
                return;
            }
            resolve(fileList)
        });
    });
}

getLocalAnswers().then((fileList)=>{
    const fileMap = fileList.reduce((obj,file)=>{
        obj[+file.substring(0,file.indexOf('.'))] = file;
        return obj;
    },Object.create(null));

    const rows = questions.map((question)=>{
        const title = fileMap[question.id]? `[${question.title}](./answers/${fileMap[question.id]})`:question.title;

        return `| ${question.id} | ${title} | ${difficultyMap[question.difficulty]} |`;
    }).join('\n');

    const prefix = fs.readFileSync("./_prefix.md",'utf8');

    fs.writeFile('../README.md', prefix+rows+'\n', 'utf8', (err) => {
        if (err) throw err;
        console.log('文件已被保存');
    });

})