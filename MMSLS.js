
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=21270100&pid=0fd5b27ed44ac8dab29f43bd36b8d30a&tid=d0440d8d7cb51108f909864ce1dd2939",
    "https://www.maimemo.com/share/page?uid=21270100&pid=0fd5b27ed44ac8dab29f43bd36b8d30a&tid=d0440d8d7cb51108f909864ce1dd2939",
    "https://www.maimemo.com/share/page?uid=21270100&pid=0fd5b27ed44ac8dab29f43bd36b8d30a&tid=d0440d8d7cb51108f909864ce1dd2939",
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
