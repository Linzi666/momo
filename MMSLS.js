
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=21270100&pid=eb3c7310d51f714ae14360ad0e17735c&tid=13dd3f996e87e242fc1e3024ec55000e",
    "https://www.maimemo.com/share/page?uid=21270100&pid=eb3c7310d51f714ae14360ad0e17735c&tid=13dd3f996e87e242fc1e3024ec55000e",
    "https://www.maimemo.com/share/page?uid=21270100&pid=eb3c7310d51f714ae14360ad0e17735c&tid=13dd3f996e87e242fc1e3024ec55000e",
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
