// 赋值给 `exports` 不会修改模块，必须使用 `module.exports`。
//可以为 module.exports 属性分配新的值（例如函数或对象）。

module.exports = class Square {
    constructor(width) {
      this.width = width;
    }
  
    area() {
      return this.width ** 2;
    }
  };