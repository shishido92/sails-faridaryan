module.exports = {


  friendlyName: 'View private article list',


  description: 'Display "Private article list" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/articles/private-article-list'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
