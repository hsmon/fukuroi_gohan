/******************************************************
 * UserAgent
 ******************************************************/
import UserAgent from './global/_ua';

/** ======================================================
 * リンク非活性化
 * ==================================================== */
import noLinks from './container/_noLinks'

/** ======================================================
 * 外部リンク処理
 * ==================================================== */
import addNoOpener from './container/_addNoOpener'

/** ======================================================
 * LazyLoad
 * ==================================================== */
import lazyLoad from './container/_lazyload'

/** ======================================================
 * 画像切り替え
 * ==================================================== */
import imgSwitch from './container/_imgSwitch'

window.addEventListener('DOMContentLoaded', () => {
  // UserAgent
  UserAgent();
  // 外部リンク処理
  addNoOpener();
  // lazyload
  lazyLoad();
  // 画像切り替え
  imgSwitch();
});
window.onload = () => {
  // リンク非活性化
  noLinks();
}