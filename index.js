function toggleNavbar() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
const scroll = new LocomotiveScroll({
    el: document.querySelector('#bgimg'),
    smooth: true
});
function circlemousefollower(xscale,yscale){
    window.addEventListener("mousemove",function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
      })
}
circlemousefollower();

// Function to initialize the mouse follower
// function circlemousefollower(xscale, yscale) {
//     // Check if local storage is available
//     if (typeof(Storage) !== "undefined") {
//         // Check if mouse position is stored in local storage
//         if (localStorage.getItem("mouseX") && localStorage.getItem("mouseY")) {
//             // Retrieve mouse position from local storage
//             const storedX = parseInt(localStorage.getItem("mouseX"));
//             const storedY = parseInt(localStorage.getItem("mouseY"));
//             // Update the position of the circle
//             document.querySelector("#minicircle").style.transform = `translate(${storedX}px, ${storedY}px)`;
//         }
//     }
    
//     // Add event listener for mousemove
//     window.addEventListener("mousemove", function(dets) {
//         // Update mouse position in local storage
//         localStorage.setItem("mouseX", dets.clientX);
//         localStorage.setItem("mouseY", dets.clientY);
//         // Update the position of the circle
//         document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
//     });
// }

// // Call the function to activate the mouse follower
// circlemousefollower();

