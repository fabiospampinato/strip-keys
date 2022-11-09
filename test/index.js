
/* IMPORT */

import {describe} from 'fava';
import stripKeys from '../dist/index.js';

/* MAIN */

describe ( 'stripKeys', it => {

  it ( 'Removes a single key', t => {

    const complete = { a: 0, b: 1, c: 2 };
    const stripped = { a: 0, b: 1 };

    t.deepEqual ( stripKeys ( complete, 'c' ), stripped );

  });

  it ( 'Removes an array of keys', t => {

    const complete = { a: 0, b: 1, c: 2 };
    const stripped = { b: 1 };

    t.deepEqual ( stripKeys ( complete, ['a', 'c'] ), stripped );

  });

  it ( 'Supports deep removal', t => {

    const complete = { a: 0, b: 1, c: { b: 1, c: { b: 1, d: 3 } } };
    const stripped = { a: 0, c: { c: { d: 3 } } };

    t.deepEqual ( stripKeys ( complete, 'b' ), stripped );

  });

  it ( 'Supports non-deep removal', t => {

    const complete = { a: 0, b: 1, c: { b: 1, c: { b: 1, d: 3 } } };
    const stripped = { a: 0, c: { b: 1, c: { b: 1, d: 3 } } };

    t.deepEqual ( stripKeys ( complete, 'b', false ), stripped );

  });

  it ( 'Doesn\'t mutate the original object', t => {

    const complete = { a: 0, b: 1, c: 2 };
    const original = JSON.parse ( JSON.stringify ( complete ) );
    const stripped = { a: 0, b: 1 };
    const result = stripKeys ( complete, 'c' );

    t.deepEqual ( result, stripped );
    t.deepEqual ( complete, original );

  });

});
