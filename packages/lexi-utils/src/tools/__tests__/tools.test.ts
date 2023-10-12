/// <reference types="@types/jest/index.d.ts" />
import { removeAllSpace ,getRandomStr, getUrlParamsByKey} from '../index';


/**
 * 生成随指定的随机数
 */
test('Random numbers should be generated  ', () => {
  // 指定长度为1
  expect(getRandomStr(1).length).toBe(1);
  // 指定长度为20
  expect(getRandomStr(20).length).toBe(20);
  // 默认生成10位
  expect(getRandomStr().length).toBe(10)
});


/**
 * removeAllSpace
 * 移除字符串中的所有空格
 */
test('Removes all Spaces in the string', () => {
  expect(removeAllSpace(' 1 2 3 ')).toBe('123');
  expect(removeAllSpace(' ')).toBe('');
});


/**
 * 解析url中的参数
 */
test('Get the value of the specified key in the string', () => {
  expect(getUrlParamsByKey('a=3','a')).toBe('3');
  expect(getUrlParamsByKey('http://www.baidu.com?a=3','a')).toBe('3');
  expect(getUrlParamsByKey('?a=1&b=2&c=3','a')).toBe('1');
  expect(getUrlParamsByKey('?a=1&b=2&c=3','b')).toBe('2');
  expect(getUrlParamsByKey('?a=1&b=2&c=3','c')).toBe('3');
  expect(getUrlParamsByKey('?a=1&b=2&c=3','d')).toBe(null);
  expect(getUrlParamsByKey('?a=1&b=2&c=3','')).toBe(null);
  expect(getUrlParamsByKey('?a=1&b=2&c=3',' ')).toBe(null);
  expect(getUrlParamsByKey('?a=1&b=2&c=3','&')).toBe(null);
  expect(getUrlParamsByKey('?a=1&b=2&c=3','a=1')).toBe(null);
  expect(getUrlParamsByKey('?a=1&b=2&c=3','a=1&b=2&c=3')).toBe(null);

}
);