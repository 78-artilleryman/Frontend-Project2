// eslint-disable-next-line @typescript-eslint/no-require-imports
// eslint-disable-next-line no-undef, @typescript-eslint/no-require-imports
const { build } = require("esbuild");

const run = ({ entryPoints = ["src/index.ts"], pkg, config = {} }) => {
  // eslint-disable-next-line no-undef
  const dev = process.argv.includes("--dev");
  const minify = !dev;

  // eslint-disable-next-line no-undef
  const watch = process.argv.includes("--watch");

  const external = Object.keys({
    ...pkg.dependencies,
    ...pkg.peerDependencies,
  });

  const baseConfig = {
    entryPoints,
    bundle: true,
    minify,
    sourcemap: true,
    outdir: "dist",
    target: "es2019",
    watch,
    external,
    ...config,
  };

  Promise.all([
    build({
      ...baseConfig,
      format: "esm",
    }),
    build({
      ...baseConfig,
      format: "cjs",
      outExtension: {
        ".js": ".cjs",
      },
    }),
  ]).catch(() => {
    console.error("Build failed");
    // eslint-disable-next-line no-undef
    process.exit(1);
  });
};
// eslint-disable-next-line no-undef
module.exports = run;
