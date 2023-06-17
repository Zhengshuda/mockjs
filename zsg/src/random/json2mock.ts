import { jsonParse } from '../util';
import Mock from './index';
import type { JsonMockType } from '../util'

export default function json2mock(json: JsonMockType) {
    const result: JsonMockType = {};
    const parsedData = jsonParse(json);

    for (const item of parsedData) {
        const { key, type, value, params } = item;

        switch (type) {
            case 'string':
                result[key] = Mock.string(value, ...params);
                break;

            case 'array':
                result[key] = Mock.array(value, ...params);
                break;

            case 'int':
                result[key] = Mock.int(...params);
                break;

            case 'float':
                result[key] = Mock.float(...params);
                break;

            case 'boolean':
                result[key] = Mock.bool();
                break;

            case 'object':
                result[key] = Mock.object(value, ...params);
                break;

            case 'undefined':
                result[key] = undefined;
                break;

            default:
                result[key] = null;
                break;
        }
    }

    return result;
}