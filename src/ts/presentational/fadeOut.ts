/**
 * fadeOut
 * @function
 * @argument {NodeList} obj フェードアウトさせたい対象要素を代入
 */
export const fadeOut = (obj: any) => {
  obj.style.transition = 'height .5s , opacity .2s, visibility .5s';
  // obj.style.opacity = '0';
  obj.style.visibility = 'hidden';
  obj.style.height = '0';
};