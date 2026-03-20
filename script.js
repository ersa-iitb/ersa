function openChapter(page){

window.location.href = page;

}

function openSection(evt, sectionName){

let sections = document.querySelectorAll(".chapter-section");
let tabs = document.querySelectorAll(".chapter-tab");

sections.forEach(sec => sec.classList.remove("active"));
tabs.forEach(tab => tab.classList.remove("active"));

document.getElementById(sectionName).classList.add("active");
evt.currentTarget.classList.add("active");

}




const tiles = document.querySelectorAll(".activity-gallery img")

const imagePool = [
"images/gallery/1.JPG",
"images/gallery/2.JPG",
"images/gallery/3.JPG",
"images/gallery/4.JPG",
"images/gallery/5.JPG",
"images/gallery/6.JPG",
"images/gallery/7.JPG",
"images/gallery/8.JPG",
"images/gallery/9.JPG",
"images/gallery/10.JPG",
"images/gallery/11.JPG",
"images/gallery/12.JPG",
"images/gallery/13.JPG",
"images/gallery/14.JPG",
"images/gallery/15.JPG",
"images/gallery/16.JPG",
"images/gallery/17.JPG",
"images/gallery/18.JPG",
"images/gallery/19.jpeg",
"images/gallery/20.jpeg",
"images/gallery/21.jpeg",
"images/gallery/22.jpeg",
"images/gallery/23.jpeg",
"images/gallery/24.jpeg",
"images/gallery/25.jpeg",
"images/gallery/26.jpeg",
"images/gallery/27.jpeg",
"images/gallery/28.jpeg",
"images/gallery/29.jpeg",
"images/gallery/30.jpeg",
"images/gallery/31.jpeg",
"images/gallery/32.jpeg",
"images/gallery/33.jpeg",
"images/gallery/34.jpeg",
"images/gallery/35.jpeg",
"images/gallery/36.jpeg",
"images/gallery/37.jpeg",
"images/gallery/38.jpeg",
"images/gallery/39.jpeg",
"images/gallery/40.jpeg",
"images/gallery/41.jpeg",
"images/gallery/42.jpeg",
"images/gallery/43.jpeg",
"images/gallery/44.jpeg"
]

function getVisibleImages(){
return [...tiles].map(img => img.src)
}

setInterval(()=>{

let tile = tiles[Math.floor(Math.random()*tiles.length)]

let visible = getVisibleImages()

let available = imagePool.filter(img =>
!visible.includes(window.location.origin + "/" + img)
)

if(available.length === 0) return

let newImg = available[Math.floor(Math.random()*available.length)]

tile.style.opacity = 0

setTimeout(()=>{
tile.src = newImg
tile.style.opacity = 1
},400)

},2000)




