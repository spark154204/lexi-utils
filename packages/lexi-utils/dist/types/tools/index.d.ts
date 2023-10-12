/**
 * 移除字符串所有空格
 * @group 工具
 * @param str  需要移除的字符串
 * @returns
 */
export declare function removeAllSpace(str: string): string;
/**
 * 生成随机数
 * @group 工具
 * @param len 随机字符串长度
 * @returns
 */
export declare function getRandomStr(len?: number): string;
/**
 * 解析url中的参数
 * @group 工具
 * @param key 键
 * @param search url
 * @returns
 */
export declare function getUrlParamsByKey(search: string, key: string): string | null;
