import Vue from "vue"
import { Common } from "./../../common/common"
import ClientUtil from "./utils/clientUtil"
/// 初期化処理
window.addEventListener("load", (e) => {

  const v = new Vue({
    el: "#app",
    data() {
      return {
        clientDateTime: Common.DateFormat(new Date(), "yyyy/MM/dd hh:mm:ss"),
      }
    },
    methods: {
      setNowDate() {
        this.clientDateTime = Common.DateFormat(new Date(), "yyyy/MM/dd hh:mm:ss")
      },
    },
  })

  const setDateTime = () => {
    setTimeout(() => {
      v.setNowDate()
      setDateTime()
    }, 1000)
  }
  setDateTime()

})
