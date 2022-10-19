
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=21270100&pid=b9bd26439322c9a520770a8dffa4d48f&tid=ad11e22ae181227f0775578edf6e5131",
    "https://www.maimemo.com/share/page?uid=21270100&pid=b9bd26439322c9a520770a8dffa4d48f&tid=ad11e22ae181227f0775578edf6e5131",
    "https://www.maimemo.com/share/page?uid=21270100&pid=b9bd26439322c9a520770a8dffa4d48f&tid=ad11e22ae181227f0775578edf6e5131",
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
