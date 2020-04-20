import {BREAK_POINT} from '../global/_global_val';
import {turnObjToArray} from '../global/_global_func';
/** ======================================================
 * 画像切り替え
 * ==================================================== */
export default function imgSwitch() {
  const _img = document.querySelectorAll('[data-img-switch]'),
    $img : HTMLElement[] = turnObjToArray(_img),
    sp:string = '_sp.',
    pc:string = '_pc.';

  function imgChange() {
    var WINDOW_WIDTH = window.innerWidth;

    $img.forEach((elm:HTMLElement) => {
      if (WINDOW_WIDTH < BREAK_POINT) {
        elm.setAttribute('src', (<string>elm.getAttribute('src')).replace(pc, sp));
      } else {
        elm.setAttribute('src', (<string>elm.getAttribute('src')).replace(sp, pc));
      }
    });
  }

  imgChange();

  let timer:number;
  window.addEventListener('resize', () => {
    clearTimeout(timer);
    timer = setTimeout(() => imgChange(), 200);
  });
}