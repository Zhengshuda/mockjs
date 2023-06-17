export interface strInterFace {
    input: 'A-Z' | 'a-z' | '0-9'
}

export interface stringType {
    type: 'lower' | 'upper' | 'number',
}

export interface dateFormat {
    getDateFormat: "yyyy-MM-dd" | "yyyy/MM/dd"
    getTimeFormat: "HH:mm:ss" | "HH/mm/ss"
}

export interface MockObj {
    [key: string]: any
}

export interface arrType {
    type: string | number | boolean | 'yyyy/MM/dd' | 'yyyy/MM/d' | 'HH:mm:ss'
        | 'HH/mm/ss' | 'idCard' | 'getPhone' | 'getBoolen' | 'getCname' | MockObj
}