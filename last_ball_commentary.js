//giving the commentary of last ball in the match.
const request=require("request");
const cheerio= require("cheerio");
const url="https://www.espncricinfo.com/series/west-indies-in-australia-2022-23-1317465/australia-vs-west-indies-1st-t20i-1317482/live-cricket-score";
console.log("Before");
request(url,cb);
function cb(err,response,html){
    if(err){
        console.log(err);
    }
    else{
        extractHTML(html);
    }
}

function extractHTML(html){
    let $=cheerio.load(html);
    let elementsarr=$(".ci-html-content");
    let text=$(elementsarr[10]).text();
    let h =$(elementsarr[10]).html();

    console.log("Text data : ",text);
    console.log("Html data : ",h);
}       
//console.log("After");
