export default {
  /**
   * storage 存储
   * @params key {string} 参数名称
   * @params value {string | number | object} 写入值
   */
  set(key: string, value: string | number | object) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  /**
   * storage 读取
   * @params key {string} 参数名称
   * @returns storage 值
   */
  get(key: string) {
    const value = localStorage.getItem(key);
    if (!value) return '';
    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  },
  /**
   * 删除 storage 值
   * @params key {string} 参数名称
   */
  remove(key: string) {
    localStorage.removeItem(key);
  },
  /**
   * 清空 storage 值
   */
  clear() {
    localStorage.clear();
  }
};