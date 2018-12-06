$("#navbarItem").click(function(e){
var a=$(".nav-pills").width();
  console.log(a);
  $(".dropdown-menu").css({
    // width:a
    });


})
$(".icon").click(function(e){
  $(".toggle").toggle();
});

$(".fa-pen").click(function(e){
  console.log("hii");
  $(this).prev("input").prop("disabled",false);
});


/* var navItems=$(".nav-item")
var drops=$(".dropdown-menu")
for(var i=1;i<=navItems.length;i++){

  drops[i].css({
    left:-navItems[i-1].offsetWidth,
    })
} */
$(window).scroll(function(event){
  if($(document).scrollTop() > 0){
    $(".reklam").css({
      position:"sticky",
      top:0,
      
    })
  }
})
var navItems=document.getElementsByClassName("nav-item")
var drops=document.getElementsByClassName("dropdown-menu")
var show=document.getElementsByClassName("show")



sliderBox({
  backgrounds: ["../img/advert1.jpg", "../img/advert2.jpg", "../img/advert3.jpg"]
});

$(".lnk").click(function(e){ 
  
  console.log("hi");
  });

  