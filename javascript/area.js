// const radius = [2,4,6,8];
// function calculateArea(radiusarr) {
 
//     let outputarr = [];
//   for(let i=0; i<radiusarr.length; i++) {
 
//     let area = Math.PI*radiusarr[i]*radiusarr[i];
 
//     outputarr.push(area);

//   }
//   return outputarr 
// }
// console.log(calculateArea(radius))



const radius = [3,1,2,4];


const area = function (radius) {
return Math.PI * radius * radius;
};


const circumference = function (radius) {
return 2 * Math.PI * radius;
};


const diameter = function (radius) {
return 2 * radius;
};




const calculate = function (radius, logic) {
const output = [];
for(let i=0;i<radius.length; i++) {
output.push(logic(radius[i]));
}
return output;
}


console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));


