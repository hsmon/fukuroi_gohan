import {turnObjToArray} from '../global/_global_func';
/** ======================================================
 * リンク非活性化
 * ==================================================== */
export default function noLinks() {
  const _cBtn = document.querySelectorAll('.c-btn.c-btn--nolink'),
    cBtn = turnObjToArray(_cBtn);
  cBtn.forEach(e => {
    const aElement = <HTMLElement>e.querySelector('a');
    aElement.setAttribute('href','');
    aElement.addEventListener('click',click=>{
      click.preventDefault();
    })
  });
}