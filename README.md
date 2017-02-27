# Strip Keys

![Issues](https://img.shields.io/github/issues/fabiospampinato/strip-keys.svg)
[![NPM version](https://img.shields.io/npm/v/strip-keys.svg)](https://www.npmjs.com/package/strip-keys)

An utility for removing specific keys from an object.

## Install

```shell
$ npm install --save strip-keys
```

## Usage

```js
import stripKeys from 'strip-keys';

const obj = {
  foo: true,
  secret: '1234',
  sub: {
    bar: true,
    secret: 'password'
  }
};

stripKeys ( obj, 'secret' ); // { foo: true, sub: { bar: true } }
stripKeys ( obj, 'secret', false ); // { foo: true, sub: { bar: true, secret: 'password' } }
stripKeys ( obj, ['secret', 'bar'] ); // { foo: true, sub: {} }
```

## API

### `stripKeys ( obj, keys: string | string[], deep: boolean = true )`

Removes a key, or an array of keys, deeply or not, from an object, without mutating the original object.

## License

MIT © Fabio Spampinato
