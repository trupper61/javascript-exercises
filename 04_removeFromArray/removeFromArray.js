const removeFromArray = function(array, ...nums) {
    let newArray = [];
    array.forEach(element => {
        if (!nums.includes(element)){
            newArray.push(element);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
