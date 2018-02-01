// // const linkedin = document.getElementById('linkedin');

// // function handle_hover(){
// //   console.log(this);

// // };


// // linkedin.addEventListener('mouseover', handle_hover);


// //when mouse hovers over icon
// //remove current image
// //append new image with transition
// //when mouse is not hovering
// //revert back to original image

// const icon = document.querySelectorAll(".icon");

// function handleHover(event){
//   const selectedIcon = this.dataset.icon;
//   const newStr = this.src.replace(this.src,`file:///Users/sophiachow/Desktop/sophia-online-portfolio/public/images/${selectedIcon}.png`);
//   console.log(event.target.src);
//   if(event.target.src === this.src){
//     console.log('handlehover');
//     document.getElementById(`${selectedIcon}`).src = newStr;
//   }
// }

// function handleUnhover(event){
//   console.log("handle Unhover "+ this.src);
// }

// icon.forEach(icon => icon.addEventListener('mouseenter', handleHover));
// icon.forEach(icon => icon.addEventListener('mouseleave', handleUnhover));


// //if event.target.src === newStr{

