
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=21270100&pid=7694f7d69a5b6833a0819a288ef29eff&tid=cb2f5cdb6e33d8725acbb89a7ffefc0e",
    "https://www.maimemo.com/share/page?uid=21270100&pid=7694f7d69a5b6833a0819a288ef29eff&tid=cb2f5cdb6e33d8725acbb89a7ffefc0e",
    "https://www.maimemo.com/share/page?uid=21270100&pid=7694f7d69a5b6833a0819a288ef29eff&tid=cb2f5cdb6e33d8725acbb89a7ffefc0e",
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
