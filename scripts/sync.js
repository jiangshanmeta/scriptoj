const http = require('http');
const fs = require('fs');

const fileList = fs.readdirSync('../answers');
const syncQuestionMap = fileList.reduce((obj,file)=>{
    obj[+file.substring(0,file.indexOf('.'))] = true;
    return obj;
},Object.create(null));

function getOnePage(page){
    return new Promise((resolve)=>{
        http.get(`http://scriptoj.mangojuice.top/api/problems?page=${page}`,{
            headers:{
                Cookie:require('./cookie'),
            },
        },(res)=>{
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => { 
                rawData += chunk;
            });
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    resolve(parsedData);
                } catch (e) {
                    console.error(e.message);
                }
            });
        }).on('error', (e) => {
            console.error(`出现错误: ${e.message}`);
        });
    });
}

function getQuestions(){
    const promises = [];
    for(let i=1;i<=4;i++){
        promises.push(getOnePage(i));
    }

    return Promise.all(promises).then((lists)=>{
        const result = [];
        lists.forEach((list)=>{
            result.push(...list.problems)
        });
        return result;
    });
}



getQuestions().then((questions)=>{
    const unsyncQuestions = questions.filter((question)=>{
        const id = +question.id;

        if(question.doneByUser && !syncQuestionMap[id]){
            return true;
        }
        return false;
    });



    if(unsyncQuestions.length){
        fs.writeFile('./TODO.json',JSON.stringify(unsyncQuestions,null,4),'utf8',(err)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('文件已经保存');
        });
    }else{
        console.log('同步完成')
    }
});