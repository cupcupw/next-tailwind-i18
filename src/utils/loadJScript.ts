import { insertScript } from '@daysnap/utils'

let flag = false
export async function loadJScript(ak: string) {
  if (window.BMapGL?.Map) {
    return
  }

  if (!flag) {
    flag = true
    insertScript(
      `https://api.map.baidu.com/api?type=webgl&v=1.0&ak=${ak}&callback=onBMapCallback`,
    ).catch(() => {
      flag = false
    })
  }

  return new Promise<void>((resolve, _) => {
    ;(window as any).onBMapCallback = () => {
      resolve()
    }
  })
}
