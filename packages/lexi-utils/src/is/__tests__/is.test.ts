/*
 * @Author: jay
 * @Date: 2023-10-10 16:33:39
 * @Last Modified by: jay
 * @Last Modified time: 2023-10-10 18:04:28
 */
/// <reference types="@types/jest/index.d.ts" />
import {
  isObject,
  isEmptyObject,
  isArray,
  isEmptyArray,
  isTrue,
} from '../index';

/**
 * test is.ts
 */
describe('is', () => {
  /**
   *  isObject
   */
  test('input is  Object', () => {
    expect(isObject({})).toBe(true);
    expect(isObject([])).toBe(false);
    expect(isObject(1)).toBe(false);
    expect(isObject('')).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(null)).toBe(false);
  });

  /**
   *  isEmptyObject
   */
  test('input is  empty Object', () => {
    expect(isEmptyObject({})).toBe(true);
    expect(isEmptyObject({ a: 1 })).toBe(false);
  });

  /**
   * isArray
   */
  test('input is  Array', () => {
    expect(isArray([])).toBe(true);
    expect(isArray({})).toBe(false);
    expect(isArray(1)).toBe(false);
    expect(isArray('')).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(null)).toBe(false);
  });

  /**
   * isEmptyArray
   */
  test('input is  empty Array', () => {
    expect(isEmptyArray([])).toBe(true);
    expect(isEmptyArray([1])).toBe(false);
  });

  /**
   * isTrue
   * 当为 ‘’ null undefined false时返回false
   */
  test('input is  true', () => {
    expect(isTrue(1)).toBe(true);
    expect(isTrue('1')).toBe(true);
    expect(isTrue({})).toBe(true);
    expect(isTrue([])).toBe(true);
    expect(isTrue(true)).toBe(true);
    expect(isTrue(false)).toBe(false);
    expect(isTrue(null)).toBe(false);
    expect(isTrue(undefined)).toBe(false);
    expect(isTrue('')).toBe(false);
    expect(isTrue(0)).toBe(false);
    expect(isTrue(NaN)).toBe(false);
  });
});
