
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=21270100&pid=b7dd1171dcfbde0800b15a02639eb604&tid=1a37e100184334ad10cd1116051c1c0b",
    "https://www.maimemo.com/share/page?uid=21270100&pid=b7dd1171dcfbde0800b15a02639eb604&tid=1a37e100184334ad10cd1116051c1c0b",
    "https://www.maimemo.com/share/page?uid=21270100&pid=b7dd1171dcfbde0800b15a02639eb604&tid=1a37e100184334ad10cd1116051c1c0b",
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
