const sumAll = function(numa, numb) {
    if(numa < 0 || numb < 0 || !Number.isInteger(numa) || !Number.isInteger(numb)){
        return "ERROR";
    }
    if (numa > numb) {
        [numa, numb] = [numb, numa];
    }
    if (numa == numb){
        return numa;
    }
    else {
        return numa + sumAll(numa + 1, numb);
    }
};

// Do not edit below this line
module.exports = sumAll;
