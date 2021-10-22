const serviceCrown2Controller_85 = require('./serviceCrown2Controller_85');

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceCrown2Controller_85.getCategories();
    // console.log('results', JSON.stringify(results));
    res.render('crown2_85', {
      data: results,
      title: 'Crown2_85',
      name: 'SHIH-WEI TANG',
      id: `209410785`,
    });
  } catch (err) {
    console.log('crown2Controller getCategories', err);
  }
};
