// CART
function openCart(){
  document.getElementById("cartDrawer").classList.add("open");
}

function closeCart(){
  document.getElementById("cartDrawer").classList.remove("open");
}

function closeAnnouncement(){
  document.getElementById("announcement").style.display="none";
}

window.addEventListener("scroll",function(){
  const announcement=document.getElementById("announcement");
  const banner=document.getElementById("movingBanner");

  if(window.scrollY>50){
    announcement.style.transform="translateY(-100%)";
    banner.style.transform="translateY(-100%)";
  }else{
    announcement.style.transform="translateY(0)";
    banner.style.transform="translateY(0)";
  }
});
