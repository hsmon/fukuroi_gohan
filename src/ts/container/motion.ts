import {vh} from '../presentational/vh'
import { BREAK_POINT } from '../constants/index'

const rootMarginValue = BREAK_POINT < window.innerWidth ? vh(20) : vh(20)

export default (dataName : string) => {
  if (dataName.length) {
    const target = [... document.querySelectorAll("[" + dataName + "]") as any ]
    const rootMargin = `${rootMarginValue * -1}px 0px`
    const options = {
      root: null,
      rootMargin,
      threshold: 0
    };
    const observer = new IntersectionObserver(trigger, options);
    target.forEach(element => observer.observe(element));

  }
  function trigger(entries : any):void {
    entries.forEach((entry: any) => {
      const item = entry.target
      if (entry.isIntersecting) item.setAttribute(dataName, "true")
    });
  }
}
