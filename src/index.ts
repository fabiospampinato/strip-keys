
/* IMPORT */

import castArray = require ( 'lodash/castArray' );
import isPlainObject = require ( 'lodash/isPlainObject' );
import transform = require ( 'lodash/transform' );

/* STRIP KEYS */

function stripKeys ( obj: {}, keys: string | string[], deep: boolean = true ) {

  keys = castArray ( keys );

  return transform ( obj, ( acc, value, key: string ) => {

    if ( keys.includes ( key ) ) return;

    if ( deep && isPlainObject ( value ) ) {

      acc[key] = stripKeys ( value, keys, deep );

    } else {

      acc[key] = value;

    }

  }, {} );

}

/* EXPORT */

export = Object.assign ( stripKeys, { default: stripKeys } );
