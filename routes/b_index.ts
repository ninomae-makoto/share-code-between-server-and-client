import * as express from "express"
import { Common } from "./../common/common"
{
  const router = express.Router()

  /* GET home page. */
  router.get("/", ({ }, res, { }) => {

    res.render("index", {
      date: Common.DateFormat(new Date(), "yyyy/MM/dd hh:mm:ss"),
    })
  })

  module.exports = router
}
