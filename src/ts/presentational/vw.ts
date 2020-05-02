/**
 * vw
 * @function
 * @argument {Number} coef 目的のvwの数値を代入
 * @return {Number} ブラウザ毎のwindowサイズ値の差異を無くし、統一された値を返す
 */
export const vw = (coef : number) => window.innerWidth * (coef / 100);