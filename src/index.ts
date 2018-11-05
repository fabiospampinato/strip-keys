
/* IMPORT */

import * as _ from 'lodash';

/* STRIP KEYS */

function stripKeys ( obj: {}, keys: string | string[], deep: boolean = true ) {

  keys = _.castArray ( keys );

  return _.transform ( obj, ( acc, value, key: string ) => {

    if ( keys.includes ( key ) ) return;

    if ( deep && _.isPlainObject ( value ) ) {

      acc[key] = stripKeys ( value, keys, deep );

    } else {

      acc[key] = value;

    }

  }, {} );

}

/* EXPORT */

export = Object.assign ( stripKeys, { default: stripKeys } );
