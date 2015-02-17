import Foo from '../../src/scripts/babelExample.js';

describe('Foo', function () {

    it('fooes', function () {
        var f = new Foo();
        f.bar();
    });

});

