const fs = require("fs-extra");
const stealTools = require("steal-tools");

buildProd();

async function remove(fileOrFolder){
  try {
    await fs.remove(fileOrFolder);
    console.log("removed " +fileOrFolder);
  } catch (e){
    console.error(e)
  }
}

async function buildProd(){
  await remove(__dirname + "/dist");
  try {
    const buildResult = stealTools.build({
      config: __dirname + "/package.json!npm",
      main: "index"
    }, {
      minify: false,
      treeShaking: true
    });

  } catch (e) {
    console.error(e);
  }
}