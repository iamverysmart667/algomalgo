const fs = require('fs');
const path = require('path');

function humanize(str) {
  return str
    .replace(/^[\s_]+|[\s_]+$/g, '')
    .replace(/[_\s]+/g, ' ')
    .replace(/^[a-z]/, function(m) { return m.toUpperCase(); });
}

(async () => {
  try {
    const files = await fs.promises.opendir('articles');
    const articles = {};

    for await (const {name} of files) {
      const extension = path.extname(name);
      if (extension !== '.md') continue;
      const content = await fs.promises.readFile(path.join('articles', name), 'utf8');
      const title = humanize(name.replace(extension, ''));
      articles[name] = { content, right: title, name };
    }
    fs.writeFileSync("data/articles.json", JSON.stringify(articles, null, 2));
  }
  catch (e) {
    console.error(e);
  }
})();
