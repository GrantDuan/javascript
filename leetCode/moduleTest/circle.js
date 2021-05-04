/**
 * commonJS 
 *  在 Node.js 模块系统中，每个文件都被视为一个独立的模块。
 */

 
const {PI} = Math; //私有变量

exports.area = (r) => PI * r ** 2;

exports.circumference = (r) => 2 * PI * r;