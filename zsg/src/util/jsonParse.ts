export type JsonMockType = Record<string, any>;
export interface ParsedItemType {
  key: string;
  type: string;
  params?: any;
  value?: any;
}

/**
 * @description 解析 JSON，根据传入的 JSON 结构，生成对应的 mock 数据
 * @param json
 */
export function jsonParse(json: JsonMockType) {
  const result: ParsedItemType[] = [];
  const keys = Object.keys(json);

  for (const key of keys) {
    const parsedItem: ParsedItemType = {
      key: '',
      type: '',
    };
    const value = json[key];

    parsedItem.key = parseTemplateKey(key);
    parsedItem.params = parseTemplateParams(key);

    switch (typeof value) {
      case 'object':
        parsedItem.type = parseRealType(value);
        parsedItem.value = value;
        break;
      case 'number':
        if (parsedItem.params?.length === 4) {
          parsedItem.type = 'int';
        } else {
          parsedItem.type = 'float';
        }
        break;

      case 'string':
        parsedItem.type = 'string';
        break;

      case 'boolean':
        parsedItem.type = 'boolean';
        break;

      default:
        parsedItem.type = 'undefined';
        break;
    }
    result.push(parsedItem);
  }
  return result;
}

function parseTemplateKey(key: string) {
  const delimiter = '|';
  const result = key.split(delimiter)[0].trim();

  return result;
}

function parseTemplateParams(key: string) {
  const delimiter = '|';
  const params = key.split(delimiter)[1]?.trim();
  if (!params) {
    return;
  }

  const result = JSON.parse(params);

  if (!Array.isArray(result)) {
    throw new Error('参数必须用数组表示');
  }

  for (const i of result) {
    if (typeof i !== 'number') {
      console.error(`${key} 的参数必须用数字数组表示`);
      return;
    }
  }

  return result;
}

function parseRealType(value: any[] | Record<string, any> | null) {
  if (Array.isArray(value)) {
    return 'array';
  } else if (value === null) {
    return 'null';
  } else {
    return 'object';
  }
}
