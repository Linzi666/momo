
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=21270100&pid=0da2e268f4d42f3d1e48291bddf12b53&tid=dc50e60bd2f1044907379f9c1f488a8e",
    "https://www.maimemo.com/share/page?uid=21270100&pid=0da2e268f4d42f3d1e48291bddf12b53&tid=dc50e60bd2f1044907379f9c1f488a8e",
    "https://www.maimemo.com/share/page?uid=21270100&pid=0da2e268f4d42f3d1e48291bddf12b53&tid=dc50e60bd2f1044907379f9c1f488a8e",
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
