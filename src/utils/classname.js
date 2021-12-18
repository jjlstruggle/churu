const classname = (...classname) => {
  let className = "";
  classname.forEach((el) => {
    if (typeof el === "object") {
      if (el instanceof Array) {
        el.forEach((c) => {
          className += `${el} `;
        });
      } else {
        for (let i in el) {
          if (el[i]) {
            className += `${el} `;
          }
        }
      }
    } else {
      className += `${el} `;
    }
  });
  return className;
};
export default classname;
