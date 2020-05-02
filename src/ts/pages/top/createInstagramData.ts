import axios from "axios"
import { BREAK_POINT } from "../../global/_global_val"

const ACCESS_TOKEN = "EAAlX07CkqgkBAB455tKlliERzZBUritiKrHMZC6UV1zAXzZCgZAnbCUKkiAMZBZC1YRHOFGn1EQ3pVSu7tx6U4KcQCDFTPJ1tfQPmZBLdcLbxjmn6C6dcV4XhMp1YjUqNFhmSHYKBDwuqeDScZBEKsCy9zMZBMpCMBNFK6B3eYw5Nvh3dq36LDveI"
const BUSSINESS_ID= "17841407903780273"
const LIMIT_NUM = BREAK_POINT > window.innerWidth ? 6 : 10
const FIELDS = `name,media.limit(${LIMIT_NUM}){caption,like_count,media_url,permalink,timestamp,username}`

const url = `https://graph.facebook.com/v6.0/${BUSSINESS_ID}/?fields=${FIELDS}&access_token=${ACCESS_TOKEN}`

export async function createInstagramData(element: Element | null) : Promise<void> {
  try {
    const res = await axios.get(url)
    const items = await res.data.media.data

    if(!res && element) {
      element.innerHTML += `
        <li class="t-sns__list-item _loading"><p role="alert" aria-busy="true">loading...</p></li>
      `
    }
    if(element) {
      const loadingItem : HTMLElement | null = document.querySelector('._loading')
      if(loadingItem) loadingItem.style.display = "none"

      for (let i = 0; i < items.length; i++) {
        element.innerHTML += `
          <li class="t-sns__list-item">
            <a href="${items[i].permalink}" target="_blank" rel="noopener noreferrer">
              <div class="t-sns__list-item__image"
                role="img"
                style="background:url(${items[i].media_url}) no-repeat center center;background-size: cover;"
              ></div>
            </a>
          </li>
        `
      }
    }
  }
  catch (error) {
    console.error(error);
    if(element) {
      element.innerHTML += `
        <li class="t-sns__list-item _error">読み込みに失敗しました。再度Webページを開き直してください。</li>
      `
    }
  }
}
