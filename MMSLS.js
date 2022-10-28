
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=21270100&pid=afa31488bb3cbb430d648be0fc55800f&tid=9479598cf46d33ca7179f3010a62f225",
    "https://www.maimemo.com/share/page?uid=21270100&pid=afa31488bb3cbb430d648be0fc55800f&tid=9479598cf46d33ca7179f3010a62f225",
    "https://www.maimemo.com/share/page?uid=21270100&pid=afa31488bb3cbb430d648be0fc55800f&tid=9479598cf46d33ca7179f3010a62f225",
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
