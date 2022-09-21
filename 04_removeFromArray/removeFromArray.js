const removeFromArray = function(arr1, ...rand) {
    rand.sort();
    for (let i=0; i <arr1.length; i++){ 
        for (let j=0; j<rand.length; j++){ 
            if (rand[j]==arr1[i] && typeof(rand[j])== typeof(arr1[i])){ 
               arr1.splice(i,1);
            }
        }
    }
    return arr1;
};

// Do not edit below this line
module.exports = removeFromArray;
