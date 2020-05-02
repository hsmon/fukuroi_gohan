import { createInstagramData } from "./createInstagramData";
const list = document.querySelector('.t-sns__list')

function moreLead() {
  // 表示させる要素の総数をlengthメソッドで取得
  const contents = document.querySelector('.t-topics')
  const li = [...document.querySelectorAll(".t-topics__list li") as any]
  const liLenght: number = li.length

  // デフォルトの表示数
  const defaultNum = 5;
  // ボタンクリックで追加表示させる数
  const addNum = 10;
  // 現在の表示数
  let currentNum = 0;

  if(contents) {
    // moreボタンを表示し、closeボタンを隠す
    const moreButton : HTMLElement | null = contents.querySelector(".t-topics__more")

    if(moreButton) moreButton.style.display = 'block'

    // defaultNumの数だけ要素を表示
    // defaultNumよりインデックスが大きい要素は隠す
    li.forEach((element,index)=>{
      if(index + 1 > defaultNum) return
      element.classList.add('is-show')
    })
    // 初期表示ではデフォルト値が現在の表示数となる
    currentNum = defaultNum

    // moreボタンがクリックされた時の処理
    moreButton?.addEventListener('click',(e)=>{
      e.preventDefault()

      currentNum += addNum
      li.forEach((element,index)=>{
        if(index > currentNum) return
        element.classList.add('is-show')
      })

      if(currentNum >= liLenght) {
        currentNum = defaultNum

        if(moreButton) moreButton.style.display = 'none'
      }
    },{passive:false})
  }
  
}

window.addEventListener('DOMContentLoaded', () => {
  createInstagramData(list)
  moreLead()
})