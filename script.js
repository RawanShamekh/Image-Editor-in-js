
let saturate=document.getElementById("saturate")
let contrast=document.getElementById("contrast");
let brightness=document.getElementById("brightness");
let sepia=document.getElementById("sepia")
let grayscale=document.getElementById("grayscale");
let blur=document.getElementById("blur");
let hue_rotate=document.getElementById("hue-rotate");

let upload=document.getElementById("upload");
let image=document.getElementById("img");
let download=document.getElementById("download");
let reset=document.querySelector("ul li span");
let img_container=document.querySelector(".img-src");
let filters=document.querySelectorAll("ul li input");


let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");



window.onload=function(){
    reset.style.display="none";
    download.style.display="none";
    img_container.style.display="none";
}
let resetValue=()=>{
    
    ctx.filter="none";
    saturate.value='100'
    contrast.value='100'
    brightness.value='100'
    sepia.value='0'
    grayscale.value='0'
    blur.value='0'
    hue_rotate.value='0'

}

upload.onchange=function(){
    resetValue();
    reset.style.display="block";
    download.style.display="block";
    img_container.style.display="block";
    let file=new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload=function(){
        image.src=file.result;
    }
    image.onload=function(){
        canvas.width=image.width;
        canvas.height=image.height;
        ctx.drawImage(image,0,0,canvas.width,canvas.height)
        image.style.display="none";
    }

   
    
}

filters.forEach(filter => {
    filter.addEventListener("input",function(){
        ctx.filter=`
        saturate(${saturate.value}%)
    
    contrast(${contrast.value}%)
        brightness(${brightness.value}%)
      sepia(${sepia.value}%)
           grayscale(${grayscale.value})
         blur(${blur.value}px)
        hue-rotate(${hue_rotate.value}deg)
        `
        ctx.drawImage(image,0,0,canvas.width,canvas.height)
    })
    
});

reset.addEventListener("click",resetValue)

download.onclick=function(){
    download.href=canvas.toDataURL();
    
}