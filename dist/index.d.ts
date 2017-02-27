/// <reference types="lodash" />
import * as _ from 'lodash';
declare function stripKeys(obj: {}, keys: string | string[], deep?: boolean): _.Dictionary<{}>;
export default stripKeys;
