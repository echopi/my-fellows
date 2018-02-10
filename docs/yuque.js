const https = require("https");
const fs = require('fs');

const api = 'https://yuque.com/api/docs/{id}?book_id=77363&raw=1';

['inl2r4','ks3kfv'].forEach(id => {
  const url = api.replace('{id}', id);
  https.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      const json = JSON.parse(body);
      if (json.data) {
        fs.writeFileSync(`${id}.md`,  '# ' + json.data.title + '\n\n' + json.data.body);
      }
    });
  });
});
