let getAllSectionItems = document.querySelectorAll(".section_main_items")
let  sectionTextArr = [
    "I have an organized method of teaching technique, phrasing concepts, memorization and performance techniques in the classical guitar lessons. I always keep a positive encouraging style to my teaching and make an enjoyable experience for the student. My lessons are completely customized to fit the different needs of each student individually and I look forward to meeting all your musical needs in my classical guitar lessons!",
    "During the acoustic guitar class I teach Rhythm guitar in the Blues, Jazz, Rock and Folk styles. I also teach lead guitar on acoustic and how to improvise and use scales in a wide range of styles. I believe in a strong foundation, in solid technique and have an organized method to teach it. For learning to read music on acoustic guitar I have a very thorough and organized method for teaching music reading. I customize it to a persons individual needs and desires that they have on the instrument. I am very flexible in my approach and encourage an open communication and always provide a relaxed positive environment in the lesson. The most important thing is to enjoy the process of learning and have fun! If u have any questions contact me!",
    'In the electric guitar lesson I focus on technique and ways to develop finger strength and agility. I teach rhythm guitar and techniques in many different styles and have an organized method that is step by step and easy to understand. I also teach lead guitar in my lessons I teach scales and theory for the student to know how to solo and "jam" in many different situations. My lessons are also flexible and I encourage an open communication so we can customize a lessons to whatever your musical needs are. If u have any questions just contact me!',
    "In the bass guitar lessons I teach both pick and fingerstyle bass. The lesson is structured to have a strong focus on the development of good technique and have many exercises to teach the development of strength and movement on the instrument. Also taught in the lesson are scales and arepeggios and theory so that the student knows how to play in many different situtaions. I customized the lesson to the individual student and have an open communication with a positive encouraging enviroment. If have any questions just contact me!",
    'In the drum lesson I teach both snare drum and full kit. Jazz and Rock drum styles are taught in these lessons with a step by step approach. Technique and physical development are greatly encouraged along with a strong emphasis on the development of rudiments. The rudiments are taught on the snare drum and kit, they are great for technique development! Music reading is also a very important part of the lesson.  Being a guitar instructor I can "jam" with the student and give a feel for what it is like to work with other musicians. The lessons are always flexible to fit whatever the musical needs of the student are and an open communication is always encouraged along with a relaxed and positive enviroment to learn in! If you have any questions just feel free to contact me!',
    "In the Ukulele lesson I teach the basic chords and strumming patterns that are popular for the ukulele starting with simple songs to develop the techniques for this instrument. Music reading is also taught. The lessons are always customized to the students individual musical needs and a open communication is always enouraged so we can provide a positive and relaxed environment to learn in! If u have any questions feel free to contact me!"
];
let sectionImgArr=["classical2.1","acoustic","electric","bass3.1","drums1","ukelele1"]
let getSectionTextBlock = document.querySelector(".section_main_size_source_text")
let getSectionSource = document.querySelector(".section_main_size_source")
let getSectionImgBlock = document.querySelector(".section_main_size_source_img")
let getvideos=document.querySelectorAll(".videos");
let getSectionClose = document.querySelector(".section_main_size_close");
let getSectionTextImg= document.querySelector(".section_text_img");
const nav = document.querySelector("nav");
let sections = document.querySelectorAll("section");
let menu = document.querySelector(".menu");
let menubar = document.querySelector(".menu_bar")

// intersection  navbar navigation scroll
const options = {
    threshold: 0.7
};
let observer = new IntersectionObserver(navCheck, options);
function navCheck (entries){
    entries.forEach((entry, ind, arr) =>{
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        if (entry.isIntersecting){
            activeAnchor.classList.add("active");
        } else{
            activeAnchor.classList.remove("active");
        }
    })
 };
 sections.forEach(section=>{
     observer.observe(section);
 })

// navbar navigation click
let navigationLinks = document.querySelectorAll("ul li a");
navigationLinks.forEach((li, index, arr) =>{
    li.addEventListener("click",() =>{
        arr.forEach(el =>{
            el.classList.remove("active")
        })
        li.classList.add("active");
    })
});
// courses click open 
getAllSectionItems.forEach((elem,index,arr)=>{
    elem.addEventListener("click",()=>{
        arr.forEach(e=>{
            e.style=`
            border:none;`
            // e.classList.remove("after_checkid")
        })
        elem.style=`
        border: 5px solid var(--color);`
        // elem.classList.toggle("after_checkid")
        getSectionTextBlock.innerText=sectionTextArr[index]
        getSectionSource.style="display:flex;"
        getSectionImgBlock.style=`background-image:url(./photos/guitars/${sectionImgArr[index]}.jpg);`
    })
});
// courses click close
    getSectionClose.addEventListener("click",()=>{
        getAllSectionItems.forEach((elem, ind, arr)=>{
                elem.style=`
                border: none;`
            }) 
        getSectionSource.style=`
        display:none;
        transition:0.3s`;
        // getAllSectionItems.forEach((e)=>e.classList.remove("after_checkid"))
});

// navbar fixed
window.addEventListener("scroll", (e)=>{
    if (scrollY > 49){
        nav.style=`
            background-color: rgba(246,166,98, 0.85);
            background-attachment: fixed;
            transition: 1s;
            z-index:1000;
            padding: 15px 0px;
            `;
        }
        if(scrollY < 49){
            nav.style= `
        background-color: none;
        transition: 1s;
        `
    }
})
// music border on click
getvideos.forEach((el, idn, arr)=>{
    el.addEventListener("click", ()=>{
        arr.forEach(e=>{
            e.style = `
            border:none`;
        });
        el.style = `border: 5px solid var(--color);`
        
    })
})
// lift = document.createElement("a");
// lift.setAttribute("id", "pop");
// getSectionTextImg.appendChild(lift);

let m = 0;
menu.addEventListener("click", ()=>{
    if(m == 0){
        menubar.style=`
        transform: scaleX(1);`;
        m = 1;
    }
    else if(m == 1){
        menubar.style=`
        transform: scaleX(0);`;
        m = 0;
    }

})