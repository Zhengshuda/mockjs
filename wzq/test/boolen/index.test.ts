import { it, expect } from 'vitest';
import { Mock } from '../../src/index'
const mock = new Mock()

it('随机布尔值测试', () => {
    const boolen = mock.getBoolen()
    if(boolen) {
        expect(boolen).toBeTruthy() 
    } else {
        expect(boolen).toBeFalsy() 
    }
    
})