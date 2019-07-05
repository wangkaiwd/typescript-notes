var object = {
    name: 'wangkai',
    age: 18,
    run: function () {
        console.log('run');
    },
    eat: function (a, b) {
        var result = "eat " + a + " and " + b;
        console.log(result);
    },
    hobby: [{ id: 1, item: 'hobby1' }, { id: 2, item: 'hobby2' }],
    think: { most: 'life', secondary: 'others' }
};
console.log(object);
