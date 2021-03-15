module.exports = function check(str, bracketsConfig) {
    let finalArr = [],pair = {};

    for(let j in bracketsConfig) {
        pair[bracketsConfig[j][0]] = bracketsConfig[j][1];
    }
    finalArr.push(str.charAt(0));

    for(let i = 1; i < str.length; i++) {
        if(str.charAt(i) === pair[finalArr[finalArr.length - 1]]) {
            finalArr.pop();
        } else {
            finalArr.push(str.charAt(i));
        }
    }
    return finalArr.length > 0?  false: true;
}
