
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=21270100&pid=1502cecb7c6bdededaa2e0982eaa0f7b&tid=e21b0e9beb99d979d95a30a5cb150d24",
    "https://www.maimemo.com/share/page?uid=21270100&pid=1502cecb7c6bdededaa2e0982eaa0f7b&tid=e21b0e9beb99d979d95a30a5cb150d24",
    "https://www.maimemo.com/share/page?uid=21270100&pid=1502cecb7c6bdededaa2e0982eaa0f7b&tid=e21b0e9beb99d979d95a30a5cb150d24",
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
