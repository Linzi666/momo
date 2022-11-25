
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=21270100&pid=e15cb6b0dec87a1f68bef12b27f3e46d&tid=007f5a7fae8915640fdc110688dd125b",
    "https://www.maimemo.com/share/page?uid=21270100&pid=e15cb6b0dec87a1f68bef12b27f3e46d&tid=007f5a7fae8915640fdc110688dd125b",
    "https://www.maimemo.com/share/page?uid=21270100&pid=e15cb6b0dec87a1f68bef12b27f3e46d&tid=007f5a7fae8915640fdc110688dd125b",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
