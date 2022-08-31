const yaml = require('js-yaml');
const fs = require('fs');

const DIR_PATH = 'public/master';

if (!fs.existsSync(DIR_PATH)) {
  fs.mkdirSync(DIR_PATH);
}

try {
  const index = yaml.load(fs.readFileSync('master/index.yml', 'utf8'));
  fs.writeFileSync(`${DIR_PATH}/index.json`, JSON.stringify(index), 'utf-8');
  Object.entries(index).forEach(([name, index]) => {
    const master = yaml.load(fs.readFileSync(`master/${name}.yml`, 'utf8'));
    fs.writeFileSync(`${DIR_PATH}/${index}.json`, JSON.stringify(master), 'utf-8');
  });
} catch (e) {
  console.log(e);
}
