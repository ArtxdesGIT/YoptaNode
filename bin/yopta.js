#!/usr/bin/env node
const { readFileSync } = require('fs');
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
process.removeAllListeners("warning");

const cwdPath = process.cwd();

let command = process.argv[2];
const replacement = fetch('https://artxdes.repl.co/yopta?request=replacement').then(res => {
  return res.json();
});

if (command === "--version" || command === "--v") {
  const packageJson = JSON.parse(readFileSync(path.join(process.cwd(), 
'./package.json')));
  const version = packageJson.version;
  console.log(`YoptaNode@1.2.0`);
} else if (command === "--help") {
  console.log(`
  --v (--version) - show currently YoptaNode version 
  --translate [file] - translates the file from node.js syntax to YoptaNode syntax.
  --
`);
} else if (command === "--translate") {
  console.log("YoptaNode \x1b[43mWARN\x1b[0m \x1b[35moptional\x1b[0m the translation method works only with Node.js codes. If you want translate YoptaNode to Node.js use the site:")
console.log("\x1b[40mhttps://yoptatranslate.artxdes.repl.co/\x1b[0m")
  const file = process.argv[3];
  if(!file) {
    console.log("YoptaNode \x1b[31mERR\x1b[0m \x1b[33mrequired\x1b[0m the translation method requires file.");
    process.exit(1);
  };
  const filePath = path.join(process.cwd(), file);
const fileExtension = path.extname(file);

  // Проверки
  if (fileExtension !== '.yp' && fileExtension !== '.js') {
  console.log('ExtensionError: invalid file extension, supported file types are .yp and .js');
    process.exit(1);
  };
  let content = readFileSync(filePath);
  for(let key of replacement) {
    
    content = content.replaceAll(replacement[key], key);
  };
} else {
  if (!command) {
    console.log('YoptaNode \x1b[41mERR\x1b[0m file not specified');
    process.exit(1);
  }

  const fileExtension = path.extname(command);

  // Проверка
  if (fileExtension !== '.sk' && fileExtension !== '.js') {
  console.log('ExtensionError: invalid file extension, supported file types are .sk and .js');
    process.exit(1);
  }

  const filePath = path.join(process.cwd(), command);

  if (!fs.existsSync(filePath)) {
    console.log(`YoptaNode \x1b[41mERR\x1b[0m \x1b[33mrequired\x1b[0m file '${command}' not found`);
    process.exit(1);
  }
  fs.readFile(command, { encoding: "utf-8" }, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        let code = data;
        for (const key in replacement) {
            code = code.replaceAll(key, replacement[key]);
        }

        try {
            eval(code);
          console.log(`Code started on YoptaNode. \x1b[33mOfficial discord support server;\x1b[0m`);
          console.log(`https://discord.gg/ucZh3ETWP5`);
        } catch (err) {
            console.log(`\x1b[31m${err}\x1b[0m`);
        }
    }
  });
              }
