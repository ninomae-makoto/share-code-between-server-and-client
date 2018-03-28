
export class Common {

  private static dateFormatter = [
    // format長が大きいものから定義すること
    (formatText: string, date: Date) => formatText.replace("hh", ("0" + date.getHours()).slice(-2)),
    (formatText: string, date: Date) => formatText.replace("h", date.getHours() + ""),
    (formatText: string, date: Date) => formatText.replace("mm", ("0" + date.getMinutes()).slice(-2)),
    (formatText: string, date: Date) => formatText.replace("m", date.getMinutes() + ""),
    (formatText: string, date: Date) => formatText.replace("dd", ("0" + date.getDate()).slice(-2)),
    (formatText: string, date: Date) => formatText.replace("d", date.getDate() + ""),
    (formatText: string, date: Date) => formatText.replace("ss", ("0" + date.getSeconds()).slice(-2)),
    (formatText: string, date: Date) => formatText.replace("s", date.getSeconds() + ""),
    (formatText: string, date: Date) => formatText.replace("yyyy", date.getFullYear() + ""),
    (formatText: string, date: Date) => formatText.replace("yy", (date.getFullYear() + "").slice(-2)),
    (formatText: string, date: Date) =>
      formatText.replace("t", date.getDate() <= 3 ? ["st", "nd", "rd"][date.getDate() - 1] : "th"),
    (formatText: string, date: Date) =>
      formatText.replace("w", ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()]),
    (formatText: string, date: Date) => formatText.replace("MMMM", [
      "January", "February", "March", "April",
      "May", "June", "July", "August", "September",
      "October", "November", "December"][date.getMonth()]),
    (formatText: string, date: Date) => formatText.replace("MMM", [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jly", "Aug", "Spt", "Oct", "Nov", "Dec"][date.getMonth()]),
    (formatText: string, date: Date) => formatText.replace("MM", ("0" + (date.getMonth() + 1)).slice(-2)),
    (formatText: string, date: Date) => formatText.replace("M", (date.getMonth() + 1) + ""),
  ]

  /**
   * 引数をフォーマットして文字列化する
   * @param date 日付型あるいは文字列・数字型8桁
   * Util.formatToString(new Date, "yyyy-MM-dd")
   */
  public static DateFormat(date: any, format: string = "yyyy/MM/dd"): string {
    if (!date) {
      return ""
    }

    let target: Date
    // フォーマット対象の文字列への変換処理
    if (typeof date === "number") {
      const dateText = date.toString()
      target = new Date(`${dateText.substring(0, 4)}/${dateText.substring(4, 6)}/${dateText.substring(6, 8)}`)
    } else if (typeof date === "string") {
      target = new Date(`${date.substring(0, 4)}/${date.substring(4, 6)}/${date.substring(6, 8)}`)
    } else if (date instanceof Date) {
      target = date
    } else {
      return date
    }

    let result = format
    Common.dateFormatter.forEach((formatter) => {
      result = formatter(result, target)
    })
    // for (const func in Common.dateFormatter) {
    //   if (Common.dateFormatter.hasOwnProperty(func)) {
    //     result = result.replace(func, Common.dateFormatter[func](target))
    //   }
    // }

    return result
  }
}
