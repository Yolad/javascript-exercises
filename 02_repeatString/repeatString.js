const repeatString = function(string, num) {
    let temp_string = string;
    for (let i =1; i<num; i++){ 
        string = string.concat(temp_string);

    }   
    if (num ==0){ 
        string ='';
    } else if (num <0){ 
        string ='ERROR';
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
