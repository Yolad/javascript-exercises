const ftoc = function(faren) {
let cel = (faren-32) * (5/9);
return Math.round(cel * 10) / 10;
};

const ctof = function(cel) {
let faren = (cel *(9/5)) +32;
return Math.round(faren * 10) / 10;;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
