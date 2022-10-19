
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=24142114&pid=b9bd26439322c9a520770a8dffa4d48f&tid=83e46209cc20535b83d5dadc09ee0759",
    "https://www.maimemo.com/share/page?uid=24142114&pid=b9bd26439322c9a520770a8dffa4d48f&tid=83e46209cc20535b83d5dadc09ee0759",
    "https://www.maimemo.com/share/page?uid=24142114&pid=b9bd26439322c9a520770a8dffa4d48f&tid=83e46209cc20535b83d5dadc09ee0759",
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
