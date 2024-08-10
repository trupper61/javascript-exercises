const repeatString = function(string, num) {
    let word = string;
    for(let i = num; i > 1; i--){
        word += string;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
