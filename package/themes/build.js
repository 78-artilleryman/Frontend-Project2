import run from "@byeonghyeon/esbuild-config"
import pkg from "./package.json" assert {type: "json"}

run({
  pkg,
})