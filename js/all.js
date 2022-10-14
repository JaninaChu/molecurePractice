
// 購物車-購買數量加減
function adder(){
    var count=document.getElementById("countnum").innerHTML;
    count=parseInt(count)+1;
    document.getElementById("countnum").innerHTML=count;
}
function minuser(){
    var count=document.getElementById("countnum").innerHTML;
    if(count<=0){
        count=0;
    }else{
        count=parseInt(count)-1;
    }    
    document.getElementById("countnum").innerHTML=count;
}



// 更多內容的開闔
$(".moredetail").click(function(){
    var x =  $(this).siblings("p")
    if( x.css("display") == "none"  ){
        x.slideDown(); 
    }else{
        x.slideUp();
    };
});



// 輪播
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("slide_changeline");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}




