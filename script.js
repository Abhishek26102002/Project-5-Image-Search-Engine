const searchForm=document.getElementById("form-box");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("result");
const searchMoreBtn=document.getElementById("show-more-btn");
const line=document.getElementsByClassName("wave")[0];
const line1=document.getElementsByClassName("wave")[1];
const line2=document.getElementsByClassName("wave")[2];


let keyword="";
let page=1;

async function searchImage(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=6zw_HpIphdOSZyZEdmTYET3zDfHzFBYELyGsvDKt_Dg&per_page=12`;

    const response=await fetch(url);
    const data=await response.json();

    if(page===1){
        searchResult.innerHTML="";
    }
    const results=data.results;

    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;

        const imgLink=document.createElement("a");
        imgLink.href=result.links.html;
        imgLink.target="_blank";

        imgLink.appendChild(image);
        searchResult.appendChild(imgLink);

    })
    line.style.height="25%";
    line1.style.height="25%";
    line2.style.height="25%";
    searchMoreBtn.style.display="block";

}
searchForm.addEventListener("submit" ,(e)=>{
    e.preventDefault();
    page=1;
    searchImage();

})

searchMoreBtn.addEventListener("click" ,()=>{
    page++;
    searchImage();
});