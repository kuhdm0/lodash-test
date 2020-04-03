const { clone, cloneDeep } = require('lodash');

describe('Shallow cloning', () => {
    const arr = [{a: 1, b: {c: 2}}, 0];
    const clonedArr = clone(arr);
    arr[0].b.c = 3;

    it('Shallow cloning should contain the exact value 2, because the value was a reference to the initial object"', () => {
        expect(clonedArr[0].b.c).toBe(3);
    });  
});

describe('Deep cloning', () => {
    const arr = [{a: 1, b: {c: 2}}, 0];
    const deepClonedArr = cloneDeep(arr);
    arr[0].b.c = 3;

    it('Deep cloning should contain the exact value 2, because the it was not changed"', () => {
        expect(deepClonedArr[0].b.c).toBe(2);
    });  
});

