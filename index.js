// exp 1
function* generator(){
    console.log("before 1");
    yield 1;
    console.log("after 1");
    console.log("before 2");
    yield 2;
    console.log("after 2");
    console.log("before 3");
    yield 3;
    console.log("after 3");
}


// const genObj = generator();
// console.log("generator obj :",genObj);
// console.log(genObj.next());
// console.log(genObj.next());
// console.log(genObj.next());
// console.log(genObj.next());


// exp 2
// function* generateIds(){
//     let id=1;

//     while(true){
//         yield id;
//         id++;
//     }
// }

// const genObj = generateIds();
// console.log(genObj.next());
// console.log(genObj.next());
// console.log(genObj.next());


// exp 3
// function* generateIds() {
//     let id = 1;

//     while (true) {
//         const inc = yield id;
//         inc ? id += inc : id++;
//     }
// }

// const genObj = generateIds();
// console.log(genObj.next());
// console.log(genObj.next(5));
// console.log(genObj.next(10));
// console.log(genObj.next());


// exp 4
// const express = require("express");
// const app = express();
// const generator = require("./generator");

// var polls = 0;

// app.get('/api/currentWeather', function (request, response) {
//     console.log(polls, polls < 5);
//     if (polls < 5) {
//         console.log("sending...empty");
//         polls++;
//         response.send({});
//     }
//     else {
//         console.log("sending...object");
//         response.send({
//             temperature: 25,
//             sky: "Partly cloudy",
//             humid: true
//         });
//         polls = 0;
//     }
// });

// generator.runPolling();

// app.listen(4000);


