// 实现一个函数reverse,接收字符串或者数字
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log(reverse(132));
console.log(reverse('abc'));
