const menuButton = document.querySelector('.st-nav__menu')
const header = document.querySelector('.st-header')

export default ():void=> {
  menuButton?.addEventListener('click',() => {
    handleToggle(header)
  })
}

function handleToggle(element:Element | null):void {
  element?.classList.toggle('is-open')
}