# W3

## 1

**index.ejs**
```html
<body>
  <h1>
    <%= title %>
  </h1>
  <p>Welcome to
    <%= title %>
  </p>
  <p>My name is
    <%= name %>
  </p>
  <p>My student id is
    <%= id %>
  </p>
</body>
```
**index.js**
```js
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', name: 'Tang Shih-Wei', id: `209410785` });
});
```
![](https://i.imgur.com/Ak32Yix.png)
---

## 2
![](https://i.imgur.com/NDtWGgy.jpg)
---

## 3 
![](https://i.imgur.com/Xz93arC.png)
---

## 4
![](https://i.imgur.com/uq4Mg0P.png)
![](https://i.imgur.com/TCMi8JD.png)
---

## 5
```js
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'crown_85',
    password: '0000',
    port: '5432',
});

pool.query('SELECT * from category_85', (err, res) => {
    console.log(JSON.stringify(res.rows))
    pool.end()
});

module.exports = pool;
```
![](https://i.imgur.com/QoKUyAG.png)