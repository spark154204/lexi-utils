/*
 * @Author: jay
 * @Date: 2023-10-10 16:22:27
 * @Last Modified by: jay
 * @Last Modified time: 2023-10-10 18:03:35
 */

/**
 * 是否是对象
 * @param obj
 * @returns
 */
export function isObject(obj: any): boolean {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 * 是否是控对象
 */
export function isEmptyObject(input: any): boolean {
  return isObject(input) && Object.keys(input).length === 0;
}

/**
 * 是否是数组
 */
export function isArray(input: any): boolean {
  return Array.isArray(input);
}

/**
 * 是否是空数组
 */
export function isEmptyArray(input: any): boolean {
  return isArray(input) && input.length === 0;
}

/**
 * 参数是否为真 当为 ‘’ null undefined false时返回false 不包含0
 * @param input
 */
export function isTrue(input: any): boolean {
  return (
    input != null &&
    input !== undefined &&
    input !== '' &&
    input !== 0 &&
    input !== false &&
    !Number.isNaN(input)
  );
}
