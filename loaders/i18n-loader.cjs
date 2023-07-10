const fs = require("fs");
const path = require("path");
const regex = /\bi18n\((.+?)\)/g;

const jsonPath = path.resolve(__dirname, '..', 'i18n.json');
const texts = JSON.parse(fs.readFileSync(jsonPath).toString());
module.exports = function (content) {

    return content.replaceAll(regex, ((_, i18nArgs) => {
        const key = eval(i18nArgs);

        return '\'' + texts[key] + '\'';
    }));
}
