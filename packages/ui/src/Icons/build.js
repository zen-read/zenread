import { transform } from "@svgr/core";
import camelcase from "camelcase";
import fs from "fs/promises";
import { dirname } from "path";
import rimraf from "rimraf";
import { promisify } from "util";
const primraf = promisify(rimraf);

async function transformIcon(svg, componentName) {
  let component = await transform(
    svg,
    {
      ref: true,
      titleProp: true,
      typescript: true,
      plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
    },
    { componentName },
  );
  return component;
}

async function getIcons(style) {
  let files = await fs.readdir(`../../assets/icons/${style}`);

  // Generate index.ts inside style directories for exporting icons
  await fs.writeFile(
    `./${style}/index.ts`,
    files
      .map(
        (file) =>
          `export { default as ${camelcase(file.replace(/\.svg$/, ""), {
            pascalCase: true,
          })} } from "./${file.replace(/\.svg$/, ".js")}";`,
      )
      .join("\n"),
    "utf8",
  );

  return Promise.all(
    files.map(async (file) => ({
      svg: await fs.readFile(`../../assets/icons/${style}/${file}`, "utf8"),
      componentName: `${camelcase(file.replace(/\.svg$/, ""), {
        pascalCase: true,
      })}`,
    })),
  );
}

async function ensureWrite(file, text) {
  await fs.mkdir(dirname(file), { recursive: true });
  await fs.writeFile(file, text, "utf8");
}

async function buildIcons(style) {
  let outDir = `./${style}`;

  let icons = await getIcons(style);

  await Promise.all(
    icons.flatMap(async ({ componentName, svg }) => {
      let content = await transformIcon(svg, componentName);

      return [ensureWrite(`${outDir}/${componentName}.tsx`, content)];
    }),
  );
}

async function main() {
  console.log(`🛠️ Building icons...`);

  await Promise.all([primraf(`./small/*`), primraf(`./mid/*`)]);
  await Promise.all([buildIcons("small"), buildIcons("mid")]);

  return console.log(`🎉 Finished building icons!`);
}

main();
