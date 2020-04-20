import {turnObjToArray} from '../global/_global_func';
/** ======================================================
 * 外部リンク処理
 * ==================================================== */
export default function addNoOpener() {
  const _aElement = document.querySelectorAll('a'),
    aElement = turnObjToArray(_aElement);
  aElement.forEach( ( elm : HTMLElement ) => {
    if (elm.getAttribute('target') === undefined) return;
    if (elm.getAttribute('target') !== '_blank') return;
    elm.setAttribute('rel', 'noopener noreferrer');
  });
}