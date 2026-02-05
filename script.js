function openProject(project){

const modal=document.getElementById("modal");
const title=document.getElementById("title");
const desc=document.getElementById("desc");
const link=document.getElementById("link");

if(project==="steam"){
title.innerText="Steam Data Analysis";
desc.innerText="Analyzed Steam dataset using Python to uncover gaming trends.";
link.href="https://github.com/sumitbhagat2084-droid";
}

if(project==="imdb"){
title.innerText="IMDB Dashboard";
desc.innerText="Interactive Power BI dashboard analyzing movie ratings.";
link.href="https://github.com/sumitbhagat2084-droid";
}

modal.style.display="flex";
}

function closeProject(){
document.getElementById("modal").style.display="none";
}
