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

/** ======================================================
 * ハンバーガーメニュー
 * ==================================================== */
import menu from './container/menu'

/** ======================================================
 * モーション
 * ==================================================== */
import motion from './container/motion'

window.addEventListener('DOMContentLoaded', () => {
  UserAgent()
  addNoOpener()
  lazyLoad()
  imgSwitch()
  menu()
  motion('data-motion')
});
window.onload = () => {
  document.body.classList.add('is-loaded')
  noLinks()
}