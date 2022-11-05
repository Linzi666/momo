
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=21270100&pid=c13363ce0b50a5b3ed36156d00691b3e&tid=e32f2e51f154a462571e8e2c0504adfa",
    "https://www.maimemo.com/share/page?uid=21270100&pid=c13363ce0b50a5b3ed36156d00691b3e&tid=e32f2e51f154a462571e8e2c0504adfa",
    "https://www.maimemo.com/share/page?uid=21270100&pid=c13363ce0b50a5b3ed36156d00691b3e&tid=e32f2e51f154a462571e8e2c0504adfa",
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
