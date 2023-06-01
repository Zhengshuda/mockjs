var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 创建随机字符串
function createRandomChar(c) {
    switch (c) {
        case 'A-Z':
            return String.fromCharCode(Math.trunc(Math.random() * 25) + 65);
        case 'a-z':
            return String.fromCharCode(Math.trunc(Math.random() * 25) + 97);
        case '0-9':
        default:
            return String.fromCharCode(Math.trunc(Math.random() * 10) + 48);
    }
}
;
function crateRandomString(length, val) {
    var str = '';
    for (var i = 0; i < length; i++)
        str += createRandomChar(val);
    return str;
}
// 随机身份证号码
function getRandom(max, base) {
    return Math.floor(Math.random() * max + (base ? base : 0));
}
function cnNewID(idcard) {
    var arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 加权因子
    var arrValid = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2]; // 校验码
    var sum = 0;
    for (var j = 0; j < 17; j++) {
        // 对前17位数字与权值乘积求和
        sum += parseInt(idcard[j], 10) * arrExp[j];
    }
    return arrValid[sum % 11];
}
function getIdcard() {
    var idcard = '';
    for (var i = 0; i < 18; i++) {
        if (i < 6) {
            idcard += getRandom(10);
        }
        else if (i == 6) {
            idcard += getRandom(2, 1); //年份第一位仅支持1和2
        }
        else if (i == 7) {
            idcard += idcard[6] == '1' ? 9 : 0; //两位年份规则，仅支持19和20
        }
        else if (i == 8) {
            idcard += idcard[6] == '1' ? getRandom(7, 3) : getRandom(2); //三位年份规则，仅支持193-199、200、201这些值
        }
        else if (i == 9) {
            idcard += getRandom(10); //四位年份规则,0-9
        }
        else if (i == 10) {
            idcard += getRandom(2); //首位月份规则
        }
        else if (i == 11) {
            idcard += idcard[10] == '0' ? getRandom(9, 1) : getRandom(3); //末位月份规则
        }
        else if (i == 12) {
            var maxDays = new Date(idcard.substr(6, 4), idcard.substr(10, 2), 0).getDate(); // 获取当月最大天数
            var day = getRandom(maxDays, 1);
            idcard += day < 10 ? ('0' + day) : day;
            i++;
        }
        else if (i > 13 && i < 17) {
            idcard += getRandom(10);
        }
        else if (i == 17) {
            idcard += cnNewID(idcard);
        }
    }
    return idcard;
}
// 生成随机手机号码
function getMoble() {
    var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
    var i = Math.round(10 * Math.random());
    var prefix = prefixArray[i];
    for (var j = 0; j < 8; j++) {
        prefix = prefix + Math.floor(Math.random() * 10);
    }
    return prefix;
}
// 生成随机日期
function randomDate() {
    var startDate = new Date(2012, 0, 1).getTime();
    var endDate = new Date(2015, 0, 1).getTime();
    var spaces = (endDate - startDate);
    var timestamp = Math.round(Math.random() * spaces);
    timestamp += startDate;
    return new Date(timestamp);
}
function formatDate(date, format) {
    var month = randomDate().getMonth();
    var day = randomDate().getDate();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    if (format === 'yyyy-MM-dd') {
        return String(date.getFullYear()) + '-' + month + '-' + day;
    }
    return String(date.getFullYear()) + '/' + month + '/' + day;
}
// 生成随机时间
function randomTime(format) {
    var hourRandom = Math.round(Math.random() * 24);
    var minutesRandom = Math.round(Math.random() * 60);
    var secondsRandom = Math.round(Math.random() * 60);
    var hour = hourRandom < 10 ? '0' + hourRandom : '' + hourRandom;
    var minutes = minutesRandom < 10 ? '0' + minutesRandom : '' + minutesRandom;
    var seconds = secondsRandom < 10 ? '0' + secondsRandom : '' + secondsRandom;
    if (format === 'HH:mm:ss') {
        return "".concat(hour, ":").concat(minutes, ":").concat(seconds);
    }
    return "".concat(hour, "/").concat(minutes, "/").concat(seconds);
}
var mockDataClass = /** @class */ (function () {
    function mockDataClass() {
    }
    mockDataClass.prototype.getStr = function (num, val) {
        return crateRandomString(num, val);
    };
    mockDataClass.prototype.getNum = function (num) {
        return parseInt(crateRandomString(num, '0-9'));
    };
    mockDataClass.prototype.getBoolen = function () {
        return Math.round(Math.random()) === 0 ? false : true;
    };
    mockDataClass.prototype.getDate = function (format) {
        return formatDate(randomDate(), format);
    };
    mockDataClass.prototype.getTime = function (format) {
        return randomTime(format);
    };
    mockDataClass.prototype.getIdCard = function () {
        return getIdcard();
    };
    mockDataClass.prototype.getPhone = function () {
        return getMoble();
    };
    mockDataClass.prototype.getObj = function (val) {
        var obj = {};
        for (var key in val) {
            switch (key) {
                case 'str':
                    if (val['str']) {
                        obj['str'] = this.getStr(val['str']['len'] || 1, val['str']['format'] || 'a-z');
                    }
                    continue;
                case 'num':
                    obj['num'] = this.getNum(val['num'] || 1);
                    continue;
                case 'boolen':
                    obj['boolen'] = this.getBoolen();
                    continue;
                case 'date':
                    obj['date'] = this.getDate(val['date'] || 'yyyy-MM-dd');
                    continue;
                case 'time':
                    obj['time'] = this.getTime(val['time'] || 'HH:mm:ss');
                    continue;
                case 'IdCard':
                    obj['IdCard'] = this.getIdCard();
                    continue;
                case 'phone':
                    obj['phone'] = this.getPhone();
                    continue;
                case 'array':
                    if (val['array']) {
                        obj['array'] = this.getArr(val['array']['dataObj'], val['array']['len']);
                    }
                    continue;
            }
        }
        return obj;
    };
    mockDataClass.prototype.getArr = function (val, num) {
        var arr = [];
        for (var i = 0; i < num; i++) {
            var obj_1 = __assign({ id: i + 1 }, this.getObj(val));
            arr.push(obj_1);
        }
        return arr;
    };
    return mockDataClass;
}());
var obj = {
    id: 1,
    str: {
        len: 10,
        format: 'a-z'
    },
    num: 0,
    boolen: false,
    date: 'yyyy-MM-dd',
    time: 'HH:mm:ss',
    IdCard: '123231231231',
    phone: '231312312',
    array: {
        dataObj: {
            id: 1,
            num: 0,
            IdCard: '',
            phone: '231312312',
        },
        len: 15
    }
};
var mockData = new mockDataClass();
console.log(JSON.stringify(mockData.getObj(obj), null, 4));
