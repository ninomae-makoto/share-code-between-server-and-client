
/**
 * import ClientUtil from "./utils/clientUtil"
 */
export default class ClientUtil {

  /** Domを削除する */
  public static RemoveDom(dom: HTMLElement | null) {
    if (dom) {
      const parent = dom.parentNode
      if (parent) {
        parent.removeChild(dom)
      }
    }

  }
}
