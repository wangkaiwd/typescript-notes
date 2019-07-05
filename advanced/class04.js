var mySearch;
mySearch = function (source, subString) {
    return source.indexOf(subString) > -1;
};
function getCounter() {
    // 这里的<Counter> 是什么意思？而且这里为什么只能使用普通函数
    var counter = function (start) {
    };
    counter.interval = 123;
    counter.reset = function () {
    };
    return counter;
}
