const http = require('http');
const fs = require('fs');

function getOnePage(page){
    return new Promise((resolve)=>{
        http.get(`http://scriptoj.mangojuice.top/api/problems?page=${page}`,(res)=>{
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
    const data = questions.map((question)=>{
        return {
            id:+question.id,
            title:question.title.replace(/\s/g,''),
            difficulty:question.difficulty,
        };
    }).sort((a,b)=>a.id-b.id);

    fs.writeFile('./metaData.json',JSON.stringify(data,null,4),'utf8',(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('问题数据已经保存');
    });

});