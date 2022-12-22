//giving the highest wicket taker of loosing team
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
    console.log(wTeamName);
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
        let allbowlers = $(tableElem).find("tr");
        for(let j=0;j<allbowlers.length;j++){
            let allcoloums=$(allbowlers[j]).find("td");
            let playername=$(allcoloums[0]).text();
            let wicketstaken=$(allcoloums[4]).text();
            if(wicketstaken>=hwt){
                hwt = wicketstaken;
                hwtName=playername;
            }
        }
    }
    console.log(`winning team: ${wTeamName} bowlername: ${hwtName} wickets taken ${hwt}`);
    //console.log(HtmlStr);
}