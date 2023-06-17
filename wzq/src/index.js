"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mock = void 0;
var index_1 = require("./string/index");
var index_2 = require("./number/index");
var index_3 = require("./idCard/index");
var index_4 = require("./dateAndTime/index");
var index_5 = require("./moble/index");
var index_6 = require("./boolen/index");
var index_7 = require("./obj/index");
var index_8 = require("./arrary/index");
var index_9 = require("./cname/index");
var Mock = /** @class */ (function () {
    function Mock() {
    }
    Mock.prototype.getStr = function (len, val) {
        return (0, index_1.crateRandomString)(len, val);
    };
    Mock.prototype.getNum = function (len) {
        return (0, index_2.createRandomNum)(len);
    };
    Mock.prototype.getBoolen = function () {
        return (0, index_6.createBoolen)();
    };
    Mock.prototype.getDate = function (format) {
        return (0, index_4.getformatDate)(format);
    };
    Mock.prototype.getTime = function (format) {
        return (0, index_4.randomTime)(format);
    };
    Mock.prototype.getIdCard = function () {
        return (0, index_3.getIdcard)();
    };
    Mock.prototype.getPhone = function () {
        return (0, index_5.getMoble)();
    };
    Mock.prototype.getObj = function (val) {
        return (0, index_7.createObj)(val);
    };
    Mock.prototype.getArr = function (val, len) {
        return (0, index_8.createArrary)(val, len);
    };
    Mock.prototype.getCname = function () {
        return (0, index_9.createName)();
    };
    return Mock;
}());
exports.Mock = Mock;
var mock = new Mock();
var str = mock.getStr(6, 'a-z');
var num = mock.getNum(9);
var obj = mock.getObj({
    idcard: 'idCard',
    date: 'yyyy-MM-dd',
    num: 'number',
    phone: 'getPhone',
    boolen: 'getBoolen',
    arr: [{
            name: 'getCname',
            idcard: 'idCard',
            date: 'yyyy-MM-dd'
        }],
    name: 'getCname',
    obj: {
        card: 'idCard',
        phone: 'getPhone',
        name: 'getCname',
    }
});
console.log(JSON.stringify(obj, null, 4));
