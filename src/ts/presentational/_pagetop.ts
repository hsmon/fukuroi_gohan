import {BREAK_POINT} from '../global/_global_val';
/** ======================================================
 * ページトップ
 * ==================================================== */
export default function pageTop() {
  const $pagetop : HTMLElement = <HTMLElement>document.querySelector('.st-footer__pagetop');
  let showFlag : boolean = false;

  // スクロール処理
  window.addEventListener('scroll', () => {
    let topY : number = <number>document.documentElement.scrollTop || <number>document.body.scrollTop;
    if (topY > 100) {
      if (!showFlag) {
        showFlag = true;
        $pagetop.style.opacity = '1';
      }
    } else {
      if (showFlag) {
        showFlag = false;
        $pagetop.style.opacity = '0';
      }
    }

    const WINDOW_WIDTH : number = window.innerWidth;
    const pageTopHeight : number = WINDOW_WIDTH > BREAK_POINT ? 100 : 55;
    const bottomHeight : number = WINDOW_WIDTH > BREAK_POINT ? 45 : 45;

    const scrollHeight : number = document.body.clientHeight; //ドキュメントの高さ
    let scrollPosition : number = window.innerHeight + topY; //現在地
    const footHeight: number = (<HTMLElement>document.querySelector('.st-footer')).offsetHeight; //footerの高さ（＝止めたい位置）
    const targetHeight : number = $pagetop.offsetHeight; //footerの高さ（＝止めたい位置）

    if (scrollHeight - scrollPosition <= footHeight - pageTopHeight) {
      $pagetop.style.position = 'absolute';
      $pagetop.style.bottom = String(footHeight - (targetHeight / 2 - bottomHeight));
      $pagetop.style.transition = 'bottom 0s';
    } else {
      $pagetop.style.position = 'fixed';
      $pagetop.style.bottom = String(pageTopHeight);
      $pagetop.style.transition = 'opacity .3s , bottom 0s';
    }
  });
}