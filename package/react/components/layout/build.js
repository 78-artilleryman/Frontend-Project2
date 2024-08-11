import run from "@byeonghyeon/esbuild-config";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import pkg from "./package.json" assert { type: "json" };

const config = {
  plugins: [vanillaExtractPlugin()],
};

run({
  pkg,
  config,
});
