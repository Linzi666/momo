
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=21270100&pid=8a7e2b83d209f8994bf198b8ca250557&tid=5874ec3234404d714ee50a6239f1733c",
    "https://www.maimemo.com/share/page?uid=21270100&pid=8a7e2b83d209f8994bf198b8ca250557&tid=5874ec3234404d714ee50a6239f1733c",
    "https://www.maimemo.com/share/page?uid=21270100&pid=8a7e2b83d209f8994bf198b8ca250557&tid=5874ec3234404d714ee50a6239f1733c",
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
