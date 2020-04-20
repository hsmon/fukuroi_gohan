/******************************************************
 * グローバル 関数
 ******************************************************/
/**
 * @function
 * @param {NodeList} obj NodeListを代入(querySelectorAll('要素'))
 * @returns {Array} NodeListからArrayへ変換
 */
const turnObjToArray  = (obj : NodeList) : Array<HTMLElement> => Array.prototype.slice.call(obj, 0);

/**
 * fadeIn
 * @function
 * @param {HTMLElement} obj フェードインさせたい対象要素を代入
 * @param height なめらかに表示させるため、対象のオブジェクトの高さを取得し代入する
 * @param duration transitionの秒数
 */
const fadeIn = (obj:HTMLElement,height:number,duration:string) : void => {
  obj.style.opacity = '';
  obj.style.visibility = '';
  obj.style.overflow = 'hidden';
  obj.style.height = `${height}px`;
  obj.style.transition = duration ? duration : 'ease .7s';
};

/**
 * fadeOut
 * @function
 * @param {HTMLElement} obj フェードアウトさせたい対象要素を代入
 */
const fadeOut = (obj:HTMLElement) : void => {
  obj.style.transition = 'ease .7s';
  obj.style.opacity = '0';
  obj.style.visibility = 'hidden';
  obj.style.height = '0';
};

/**
 * vw
 * @function
 * @param {Number} coef 目的のvwの数値を代入
 * @return {Number} ブラウザ毎のwindowサイズ値の差異を無くし、統一された値を返す
 */
const vw  = (coef : number) : number => window.innerWidth * (coef / 100);

/**
 * vh
 * @function
 * @param {Number} coef 目的のvhの数値を代入
 * @return {Number} ブラウザ毎のwindowサイズ値の差異を無くし、統一された値を返す
 */
const vh = (coef : number) : number => window.innerHeight * (coef / 100);

export {turnObjToArray,fadeIn,fadeOut,vw,vh};