
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=21270100&pid=2bbc945f622f1b12556cac52a77ba09d&tid=136c5d9c762188f10ea6640ff46fefe5",
    "https://www.maimemo.com/share/page?uid=21270100&pid=2bbc945f622f1b12556cac52a77ba09d&tid=136c5d9c762188f10ea6640ff46fefe5",
    "https://www.maimemo.com/share/page?uid=21270100&pid=2bbc945f622f1b12556cac52a77ba09d&tid=136c5d9c762188f10ea6640ff46fefe5",
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
