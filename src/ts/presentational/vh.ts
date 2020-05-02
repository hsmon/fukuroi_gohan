/**
 * vh
 * @function
 * @argument {Number} coef 目的のvhの数値を代入
 * @return {Number} ブラウザ毎のwindowサイズ値の差異を無くし、統一された値を返す
 */
export const vh = (coef : number) => window.innerHeight * (coef / 100);