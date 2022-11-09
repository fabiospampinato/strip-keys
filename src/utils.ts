
/* MAIN */

const isPlainObject = ( value: unknown ): value is Record<string | number | symbol, unknown> => {

  if ( typeof value !== 'object' || value === null ) return false;

  if ( Object.prototype.toString.call ( value ) !== '[object Object]' ) return false;

  const prototype = Object.getPrototypeOf ( value );

  if ( prototype === null ) return true;

  return Object.getPrototypeOf ( prototype ) === null;

};

/* EXPORT */

export {isPlainObject};
