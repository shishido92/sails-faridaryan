module.exports = {


  friendlyName: 'View private add article',


  description: 'Display "Private add article" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/articles/private-add-article'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
