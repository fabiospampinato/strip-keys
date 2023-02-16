
/* IMPORT */

import {isPlainObject} from './utils';

/* MAIN */

//FIXME: The return type isn't exactly right

const stripKeys = <T extends {}> ( obj: T, key: string | string[], deep: boolean = true ): T => {

  if ( !isPlainObject ( obj ) ) return obj;

  const keys = new Set ( Array.isArray ( key ) ? key : [key] );

  const strip = <T extends {}> ( obj: T ): T => {

    const clone = {} as T; //TSC

    for ( const key in obj ) {

      if ( keys.has ( key ) ) continue;

      const value = obj[key];

      if ( deep && isPlainObject ( value ) ) {

        clone[key] = strip ( value );

      } else {

        clone[key] = value;

      }

    }

    return clone;

  };

  return strip ( obj );

};

/* EXPORT */

export default stripKeys;
