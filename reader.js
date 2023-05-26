const fs = require('fs');
const replacement = {
    высрать: "console.log",
    черкануть: "const",
    хуйнуть: "new",
    пиздануть: "let",
    спиздитьИз: "require",
    внатуре: "=",
    циферки: "Date.now",
    калькулятор: "Math.floor",
    хуйня: "Math.random",
    секретик: "process.env",
    уебать: "process.kill",
    выловить: "catch",
    ебнуть: "try",
    родить: "function",
    поебалу: "return",
    выебать: "replace",
    тегнуть: "var",
    хули: "while",
    вРотРазок: "for",
    вРотВсем: "forEach",
    путьКчлену: "process.cwd",
    базараФильтруй: "filter",
    сортируйКончу: "sort",
    кастрировать: "slice",
    кастрация: "splice",
    степеньПиздатости: "Math.pow",
    значенияХуйни: "Object.values",
    ключиХуйни: "Object.keys",
    бутылки: "length",
    ивал: "eval",
    см: "size",
    хуяли: "if",
    ладно: "else",
    этоПивко:"Array.isArray",
    поебать: "break",
    типо: "case",
    бутылка: "Object",
    пиздень: "JSON.stringify",
    пиздэц: "JSON.parse"
};

fs.readFile('./index.js', { encoding: "utf-8" }, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        let code = data;
        for (let i = 0; i < 39; i++) {
            let keys = Object.keys(replacement);
            let values = Object.values(replacement);
            code = code.replaceAll(keys[i], values[i]);
        }

        try {
            eval(code);
        } catch (err) {
            console.log(`\x1b[31m${err}\x1b[0m`);
        }
    }
});

// by Artxdes#9999
