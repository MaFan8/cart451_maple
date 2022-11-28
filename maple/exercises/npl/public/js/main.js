window.onload = function () {
 
      $.get(
        "/data", // Specific route
        function (response) {
            // console.log(response);
           
            $(element).perpend('<div> hello</div>');


            for (let key of Object.keys(response)) {
              console.log(key); 
             
             
            }
            // for (let value of Object.values(response)) {
            //   console.log(value); 

            // }
        }
      ); //END get
    }; //END click






// $(document).ready(draw);
// "use strict";


// let state = "start"; // can be start and simulation
// let color = 'black'

// // SETUP
// function setup() {
//     createCanvas(windowWidth, windowHeight);
//   } // END SETUP

// // DRAW
// function draw() {
//     // background("black");
  
//     if (state === "start") {
//       start();
//     }

//   } // END DRAW

// function start() {
//     // for(let i = 0; i<=windowWidth; i+=(windowWidth / 20)){
//     line(1, windowHeight, windowWidth/2, 0)
//             // windowWidth = windowWidth - 0.5;
//             // if (windowWidth < 0) {
//             //   windowWidth = height;
//             // }
//             stroke(color);
//         }
// // }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }


// let color = 'white'


// function draw() {
// //   background(0);
  
//     // for(let i = 0; i<=windowWidth; i+=(windowWidth / 20)){
//         line(i, windowHeight, 0, 0)
//         windowWidth = windowWidth - 0.5;
//         if (windowWidth < 0) {
//           windowWidth = height;
//         }
//         stroke(color);
//     // }
  
//     //   for(let i = 0; i<=windowWidth; i+=(windowWidth / 20)){
//     //         line(i, windowHeight, windowWidth, 0)
//     //     stroke(color);
//     // }
  
//     //     for(let i = 0; i<=windowWidth; i+=(windowWidth / 20)){
//     //     line(i, windowHeight, windowWidth / 2, 0)
//     //     stroke(color);
//     // }
  
//  // append the new paragraph to the poster div
//  document.getElementById("canvas");
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }