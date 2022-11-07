
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=21270100&pid=200083dce9685bee9c78f0a8d1df4091&tid=4bfb5fcfb6346f42751ae8fbf5c6bf09",
    "https://www.maimemo.com/share/page?uid=21270100&pid=200083dce9685bee9c78f0a8d1df4091&tid=4bfb5fcfb6346f42751ae8fbf5c6bf09",
    "https://www.maimemo.com/share/page?uid=21270100&pid=200083dce9685bee9c78f0a8d1df4091&tid=4bfb5fcfb6346f42751ae8fbf5c6bf09",
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
