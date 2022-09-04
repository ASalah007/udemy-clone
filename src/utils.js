const utils = {
  range(i) {
    return [...Array(Math.floor(i)).keys()];
  },

  formatCount(num) {
    const temp = num.toString().split("").reverse();
    const res = [];
    for (let i = 0; i < temp.length; i++) {
      if (i % 3 === 0 && i !== 0) {
        res.push(",");
      }
      res.push(temp[i].toString());
    }
    return res.reverse().join("");
  },
};
export default utils;
