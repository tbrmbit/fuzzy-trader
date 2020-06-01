const express = require('express');

const app = express();
app.use(express.static('./dist/fuzzy-trader'));
app.get('/*', (req, res) => {
  res.sendFile('index.html', {root: 'dist/fuzzy-trader/'});
});
app.listen(process.env.PORT || 8080);
