
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=21270100&pid=8d1be1c23602c69013b2cb1e2b9564b5&tid=96c7952673de3171e4457159005f5065",
    "https://www.maimemo.com/share/page?uid=21270100&pid=8d1be1c23602c69013b2cb1e2b9564b5&tid=96c7952673de3171e4457159005f5065",
    "https://www.maimemo.com/share/page?uid=21270100&pid=8d1be1c23602c69013b2cb1e2b9564b5&tid=96c7952673de3171e4457159005f5065",
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
