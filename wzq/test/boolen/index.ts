import { it, expect } from 'vitest';
import { Mock } from '../../src/index'
const mock = new Mock()

it('boolenTest', () => {
    const boolen = mock.getBoolen()
    expect(boolen).toBe(true || false)
})