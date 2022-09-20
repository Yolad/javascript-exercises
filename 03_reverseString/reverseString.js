const reverseString = function(string) {
let temp_array = new Array(string.length); 
let temp_string= '';
let counter =0;
for (let i = string.length; i>0; i--){ 
    temp_array[counter] = string.slice(i-1,i);
    counter++;
}
temp_string=temp_array.join('');
return temp_string;
};

// Do not edit below this line
module.exports = reverseString;
