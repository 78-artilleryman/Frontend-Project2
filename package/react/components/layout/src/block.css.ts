import { vars } from "@byeonghyeon/themes"
import {style} from "@vanilla-extract/css"

export const blockStyle = style({
  width: "100px",
  height: "100px",
  color: vars.colors.$scale.red[400],
  backgroundColor: vars.colors.$scale.blue[500]
})