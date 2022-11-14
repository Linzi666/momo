
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=21270100&pid=40bee879389ee4b01986f5fb67b1c43a&tid=7b778949b484e10db943218905ad9f1c",
    "https://www.maimemo.com/share/page?uid=21270100&pid=40bee879389ee4b01986f5fb67b1c43a&tid=7b778949b484e10db943218905ad9f1c",
    "https://www.maimemo.com/share/page?uid=21270100&pid=40bee879389ee4b01986f5fb67b1c43a&tid=7b778949b484e10db943218905ad9f1c",
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
