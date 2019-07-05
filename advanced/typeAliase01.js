function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
console.log(getName('wangkaiwd'));
console.log(getName(function () { return 'wangkaiwd'; }));
