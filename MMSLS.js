
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=21270100&pid=7b5d2df46674e0e84550d4b2c3a9bb76&tid=d809ab98a7980a29b4d99fcaaa695180",
    "https://www.maimemo.com/share/page?uid=21270100&pid=7b5d2df46674e0e84550d4b2c3a9bb76&tid=d809ab98a7980a29b4d99fcaaa695180",
    "https://www.maimemo.com/share/page?uid=21270100&pid=7b5d2df46674e0e84550d4b2c3a9bb76&tid=d809ab98a7980a29b4d99fcaaa695180",
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
