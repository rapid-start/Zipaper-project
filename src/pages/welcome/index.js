import { defineElement } from "zipaper"
import template from "./index.html"
import style from "./index.scss"

export default defineElement({
    template,
    style: {
        content: style
    }
})