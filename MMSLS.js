
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=21270100&pid=cf7c04404d659f739007766526f789bf&tid=d90d04d753d7dc17c3d69b83b46c25c8",
    "https://www.maimemo.com/share/page?uid=21270100&pid=cf7c04404d659f739007766526f789bf&tid=d90d04d753d7dc17c3d69b83b46c25c8",
    "https://www.maimemo.com/share/page?uid=21270100&pid=cf7c04404d659f739007766526f789bf&tid=d90d04d753d7dc17c3d69b83b46c25c8",
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
