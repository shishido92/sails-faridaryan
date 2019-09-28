module.exports = {


  friendlyName: 'View public article list',


  description: 'Display "Public article list" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/articles/public-article-list'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
