
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=21270100&pid=ccb12c4f335b61ec57aec0fb944715a6&tid=d9bc1c28257aab7d7b316b6ce8e9022d",
    "https://www.maimemo.com/share/page?uid=21270100&pid=ccb12c4f335b61ec57aec0fb944715a6&tid=d9bc1c28257aab7d7b316b6ce8e9022d",
    "https://www.maimemo.com/share/page?uid=21270100&pid=ccb12c4f335b61ec57aec0fb944715a6&tid=d9bc1c28257aab7d7b316b6ce8e9022d",
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
