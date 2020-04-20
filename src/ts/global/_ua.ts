/******************************************************
 * UserAgent
 ******************************************************/
export default function UserAgent() : false | void {
  /**
   * @param {HTMLElement} BODY body要素
   */
  const BODY: HTMLElement = document.body;

  /**
   * @param {string} ua 閲覧している対象ブラウザのユーザエージェント
   */
  const ua: string = navigator.userAgent.toLowerCase();

  /**
   * IE (ver:11)
   */
  const isIE: boolean = ua.indexOf('trident/7') > -1;
  /**
   * Edge
   */
  const isEdge: boolean = ua.indexOf('edge') > -1;
  /**
   * GoogleChrome
   */
  const isChrome: boolean =
    ua.indexOf('chrome') > -1 && ua.indexOf('edge') == -1;
  /**
   * Firefox
   */
  const isFirefox: boolean = ua.indexOf('firefox') > -1;
  /**
   * Safari
   */
  const isSafari: boolean =
    ua.indexOf('safari') > -1 && ua.indexOf('chrome') == -1;
  /**
   * Opera
   */
  const isOpera: boolean = ua.indexOf('opera') > -1;

  if (isOpera) {
    BODY.classList.add('is-opera');
  } else if (isIE) {
    BODY.classList.add('is-ie');
  } else if (isChrome) {
    BODY.classList.add('is-chrome');
  } else if (isSafari) {
    BODY.classList.add('is-safari');
  } else if (isEdge) {
    BODY.classList.add('is-edge');
  } else if (isFirefox) {
    BODY.classList.add('is-firefox');
  } else {
    return false;
  }

  /**
   * デバイス判定
   *
   * @param  {boolean} Tablet 対象のタブレットを判定
   * @param  {boolean} Mobile 対象のスマホを判定
   */
  const _ua = ((u: string) => {
    return {
      Tablet:
        (u.indexOf('windows') != -1 &&
          u.indexOf('touch') != -1 &&
          u.indexOf('tablet pc') == -1) ||
        u.indexOf('ipad') != -1 ||
        (u.indexOf('android') != -1 && u.indexOf('mobile') == -1) ||
        (u.indexOf('firefox') != -1 && u.indexOf('tablet') != -1) ||
        u.indexOf('kindle') != -1 ||
        u.indexOf('silk') != -1 ||
        u.indexOf('playbook') != -1,
      Mobile:
        (u.indexOf('windows') != -1 && u.indexOf('phone') != -1) ||
        u.indexOf('iphone') != -1 ||
        u.indexOf('ipod') != -1 ||
        (u.indexOf('android') != -1 && u.indexOf('mobile') != -1) ||
        (u.indexOf('firefox') != -1 && u.indexOf('mobile') != -1) ||
        u.indexOf('blackberry') != -1
    };
  })(window.navigator.userAgent.toLowerCase());

  if (_ua.Mobile) {
    // スマホの判定時にクラスを付与
    BODY.classList.add('is-mobile');
  } else if (_ua.Tablet) {
    // タブレットの判定時にクラスを付与
    BODY.classList.add('is-tablet');
  } else {
    // スマホ・タブレット以外の判定時にクラスを付与
    BODY.classList.add('is-pc');
  }

  if (navigator.platform.indexOf('Win') != -1) {
    // Windowsの判定時にクラスを付与
    BODY.classList.add('is-Windows');
  } else {
    // Windows以外の判定時にクラスを付与
    BODY.classList.add('is-notWindows');
  }

  if (ua.indexOf('iPhone') > 0) {
    // iPhoneの判定時にクラスを付与
    BODY.classList.add('is-iPhone');
  } else if (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
    // Andoroidの判定時にクラスを付与
    BODY.classList.add('is-Android');
  } else if (ua.indexOf('iPad') > 0) {
    // iPadの判定時にクラスを付与
    BODY.classList.add('is-iPad');
  }
}
