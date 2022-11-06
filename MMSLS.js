
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=21270100&pid=be452c60f836344fcf04aefbca9ebdc8&tid=9f8e4c31e7c5bf3c68d9c9c6788f3478",
    "https://www.maimemo.com/share/page?uid=21270100&pid=be452c60f836344fcf04aefbca9ebdc8&tid=9f8e4c31e7c5bf3c68d9c9c6788f3478",
    "https://www.maimemo.com/share/page?uid=21270100&pid=be452c60f836344fcf04aefbca9ebdc8&tid=9f8e4c31e7c5bf3c68d9c9c6788f3478",
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
