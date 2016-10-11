var params = process.argv,
    length = params.length,
    sum = 0;
for(var i = 2; i < length; ++i) {
    var num = +params[i];
    if(!isNaN(num)) {
        sum += num;
    } else {
        break;
    }
}
console.log(sum);
