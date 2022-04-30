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
    const articles = [];

    console.log({ __dirname });
    for await (const {name} of files) {
      const extension = path.extname(name);
      if (extension !== '.md') continue;
      console.log({ name, extension });
      const content = await fs.promises.readFile(path.join('articles', name), 'utf8');
      const title = humanize(name.replace(extension, ''));
      articles.push({ content, right: title });
    }
    fs.writeFileSync("data/articles.json", JSON.stringify(articles, null, 2));
    console.log({ articles });
  }
  catch (e) {
    console.error(e);
  }
})();
