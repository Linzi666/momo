
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=21270100&pid=1e911a080749fd3c308c8563eb00d533&tid=369d06399fbc6e374f82cf44c6f2d869",
    "https://www.maimemo.com/share/page?uid=21270100&pid=1e911a080749fd3c308c8563eb00d533&tid=369d06399fbc6e374f82cf44c6f2d869",
    "https://www.maimemo.com/share/page?uid=21270100&pid=1e911a080749fd3c308c8563eb00d533&tid=369d06399fbc6e374f82cf44c6f2d869",
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
