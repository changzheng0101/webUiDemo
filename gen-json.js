/**
 * 根据README文档生成 json文件
 * 需要在node环境下运行 
 */
const fs = require('fs')
const md = fs.readFileSync('./README.md','utf-8');
const mdLines = md.split("\r\n");

const filterResult = mdLines.splice(mdLines.indexOf('## 01-Expanding Cards'),mdLines.length).filter(line => line !== '')
if (filterResult.length % 3 != 0) {
    console.log("something wrong");
    process.exit();
}
const result = []
for (let index = 0; index < filterResult.length; index = index + 3) {
    const resultObj = {}
    resultObj.projectLink = './'+filterResult[index].split("##")[1].trim()+'/index.html'
    resultObj.title = filterResult[index].split('-')[1]
    resultObj.content = filterResult[index+1];
    const picLinkReg = /(?<=\()(.+?)(?=\))/g
    const altReg = /(?<=\[)(.+?)(?=\])/g
    const picData = filterResult[index+2];
    resultObj.imgUrl =  picData.match(picLinkReg)[0]
    resultObj.imgAlt =  picData.match(altReg)[0]
    result.push(resultObj)
}

fs.writeFileSync('project-record.json',JSON.stringify(result))
console.log("generate file success ...");