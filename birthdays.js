//giving the birthdays of every player who participated in the match
const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
const request=require("request");
const cheerio=require("cheerio");
console.log("Before");
request(url,cb);
function cb(err,response,html){
    if(err){
        console.log(err);
    } else{
        extractHtml(html);
    }
}
function extractHtml(html){
    let $=cheerio.load(html);
    let teamNameEle=$(".ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title");
    let wTeamName=teamNameEle.text().slice(0,11);
    //console.log(wTeamName);
    let inningsarr=$(".ds-mt-3");
    // let HtmlStr="";
    let hwtName="";
    let hwt=0;
    for(let i=0;i<inningsarr.length;i++){
        // let currentHtml=$(inningsarr[i]).html();
        // HtmlStr+=currentHtml;

        let teamnameelem=$(inningsarr[i]).find(".ds-text-title-xs.ds-font-bold.ds-capitalize");
        let teamname=teamnameelem.text();
        //console.log(teamname);
        let tableElem = $(inningsarr[i]).find(".ds-w-full.ds-table.ds-table-md.ds-table-auto");
        let allbatsmen = $(tableElem).find("tr");
        for(let j=0;j<allbatsmen.length;j++){
            let allcoloumns=$(allbatsmen[j]).find("td");
            let isemptycoloumns=$(allcoloumns[0]).hasClass(".ds-hidden");
            if(isemptycoloumns==false){

                let playername=$(allcoloumns[0]).text();
                
                console.log(`player name: ${playername}`);
            }

        }
    }
    //console.log(HtmlStr);
}
