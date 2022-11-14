// function x() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(function(){
//              console.log(i))
//         }, i * 1000;
//     }
//     console.log("hey broo..")
// }
// x();

function x() {
    for (var i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(() => console.log(i)), i * 1000;
        }
        close(i)
    }
    console.log("hey broo..")
}
x();
