/**
 * 移除字符串所有空格
 * @group 工具
 * @param str  需要移除的字符串
 * @returns 
 */
export function removeAllSpace(str: string) {
    return str.replace(/\s+/g, '');
}


/**
 * 生成随机数
 * @group 工具
 * @param len 随机字符串长度
 * @returns 
 */
export function getRandomStr(len: number = 10) {
    let str = '';
    for (; str.length < len; str += Math.random().toString(36).substr(2));
    return str.substr(0, len);
}


/**
 * 解析url中的参数
 * @group 工具
 * @param key 键
 * @param search url 
 * @returns 
 */
export function getUrlParamsByKey(search:string,key:string) {
  const reg = new RegExp(`(^|&|\\?)${key}=([^&]*)(&|$)`); // ([^&]*)匹配除了& ?以外的字符) (&|$)匹配&或者字符串末尾
    const r = search.match(reg); // search.substr(1)去掉?号 match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
    if (r != null) {
      return unescape(r[2]); 
    }
    return null;
  }

  