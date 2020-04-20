import {turnObjToArray} from '../global/_global_func';
/** ======================================================
 * LazyLoad
 * ==================================================== */
export default function lazyLoad() {
  const _imgElement = document.querySelectorAll('img'),
    imgElement = turnObjToArray(_imgElement);
  imgElement.forEach(( elm : HTMLElement ) => {
    if (elm.getAttribute('lazyload') === undefined) return;
    elm.setAttribute('lazyload', 'on');
  });
}