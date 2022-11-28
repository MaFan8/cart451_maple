

window.onload = function () {
 

      $.get(
        "/data", // Specific route
        function (response) {
            // console.log(response);
           
            $(element).perpend('<div> hello</div>');


            for (let key of Object.keys(response)) {
              console.log(key); 
             
              // $('#parent'). append('<div> hello</div>');
            }
            // for (let value of Object.values(response)) {
            //   console.log(value); 

            // }
            

            // let window = document.querySelector('.window');
            // let width = 9*(window.offsetWidth/10);
            // let height = 9*(window.offsetHeight/10);

          // $(window).empty();

            //console.log(width, height);
            // let responseOb = response[i];
            for (let i=0; i<response.length ;i++){
              //  console.log(response)
               
                // let id = [i]
                //  console.log(response[i].score);
            //      let textSize = (response[i].score)*60000

                //  let wordXpos = Math.floor(Math.random() * width)
                //  let wordYpos = Math.floor(Math.random() * height)

            //     console.log(wordXpos, wordYpos)

                // $(".window" ).prepend( `<div class = "word" id = "${id}"> ${response[i].key}</div>`)
                 
                // $(`#${id}`).css("font-size",`${textSize}px`);
                // $(`#${id}`).css("top",`${wordYpos}px`);
                // $(`#${id}`).css("left",`${wordXpos}px`);
             }
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