exports. add = function(a, b) {
    return a + b
}

exports. sub = function(a, b) {
    return a - b
}

exports. mul = function(a, b) {
    return a * b
}

exports.div = function(a, b, callback) {
    if(b == 0)
        callback("Error: Division by zero", null)
    else
        callback(null, a / b)
}