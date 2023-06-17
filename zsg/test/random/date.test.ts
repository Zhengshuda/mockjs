import Mock from '../../src';
import { describe, expect, it } from 'vitest';

describe('日期工具函数', () => {
    describe('date', () => {
        it('返回的日期字符串格式为yyyy-MM-dd', () => {
            const result = Mock.date();
            const regex = /^\d{4}-\d{2}-\d{2}$/;
            expect(regex.test(result));
        });
    });

    describe('time', () => {
        it('返回的时间字符串格式为HH:mm:ss', () => {
            const result = Mock.time();
            const regex = /^\d{2}:\d{2}:\d{2}$/;
            expect(regex.test(result));
        });
    });

    describe('dateTime', () => {
        it('返回的日期和时间字符串格式为yyyy-MM-dd HH:mm:ss', () => {
            const result = Mock.dateTime();
            const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
            expect(regex.test(result));
        });
    });
});
