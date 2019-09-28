module.exports = {


  friendlyName: 'View public single article',


  description: 'Display "Public single article" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/articles/public-single-article'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
