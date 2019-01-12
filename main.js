
let chartid=["heatmap",
    "timemap",
    "bar",
    "calendar",
    "pie",
    "themeRiver",
    "wordCloud",
    "conclusion"];
let titleid=["heatmap_title",
    "timemap_title",
    "bar_title",
    "calendar_title",
    "pie_title",
    "themeRiver_title",
    "wordCloud_title",
    "conclusion_title"];
let temptitleid=0;

document.getElementById("heatmap_title").addEventListener('click', heatmap_click);
function heatmap_click() {
    displaychart(0);
    displaytitle(0);
}

document.getElementById("timemap_title").addEventListener("click", timemap_click);
function timemap_click() {
    displaychart(1);
    displaytitle(1);
}

document.getElementById("bar_title").addEventListener("click", bar_click);
function bar_click() {
    displaychart(2);
    displaytitle(2);
}

document.getElementById("calendar_title").addEventListener("click", calendar_click);
function calendar_click() {
    displaychart(3);
    displaytitle(3);
}

document.getElementById("pie_title").addEventListener("click", pie_click);
function pie_click() {
    displaychart(4);
    displaytitle(4);
}

document.getElementById("themeRiver_title").addEventListener("click", themeRiver_click);
function themeRiver_click() {
    displaychart(5);
    displaytitle(5);
}
document.getElementById("wordCloud_title").addEventListener("click", wordCloud_click);
function wordCloud_click() {
    displaychart(6);
    displaytitle(6);
}
document.getElementById("conclusion_title").addEventListener("click", conclusion_click);
function conclusion_click() {
    displaychart(7);
    displaytitle(7);
}

function displaychart(id){

    if(temptitleid != id){
        $("#"+chartid[temptitleid]).fadeOut("fast");
        $("#"+chartid[id]).fadeIn("fast");
        temptitleid=id;
    }
}

function displaytitle(id) {
    for(let i=0; i<titleid.length; i++){
        if(i!=id){
            let obj=document.getElementById(titleid[i]);
            obj.style.color="white";
        }
        else{
            let obj=document.getElementById(titleid[i]);
            obj.style.color='#fb9b2a';
        }
    }
}

function init() {
    for(let i=0; i<chartid.length; i++){
        if(i==0){
            let obj=document.getElementById(chartid[i]);
            obj.style.display='block';
        }
        else{
            let obj=document.getElementById(chartid[i]);
            obj.style.display='none';
        }
    }
}