const db = require('../utils/database');

const Category_87 = class Category_87 {
  constructor(id, name, size, remote_url, local_url, link_url) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.remote_url = remote_url;
    this.local_url = local_url;
    this.link_url = link_url;
  }
  //get all categories
  static async fetchAll() {
    try {
      let results = await db.query(`SELECT * from category_87`);
      console.log('results', JSON.stringify(results.rows));
      return results.rows;
    } catch (e) {
      console.log('error', e);
    }
  }
};

// const test = async () => {
//   let results = await Category_87.fetchAll();
//   console.log('results', JSON.stringify(results.rows));
// };

// test();
module.exports = Category_87;
