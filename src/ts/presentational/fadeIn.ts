/**
 * fadeIn
 * @function
 * @argument {NodeList} obj フェードインさせたい対象要素を代入
 * @argument height なめらかに表示させるため、対象のオブジェクトの高さを取得し代入する
 * @argument duration transitionの秒数
 */
export const fadeIn = (
  obj : any,
  height:number,
  duration:string
  ) => {
  obj.style.opacity = '1';
  obj.style.visibility = 'visible';
  obj.style.overflow = 'hidden';
  obj.style.height = `${height}px`;
  obj.style.transition = duration ? duration : 'height .5s , opacity .2s , visibility .5s';
};