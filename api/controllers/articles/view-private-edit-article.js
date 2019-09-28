module.exports = {


  friendlyName: 'View private edit article',


  description: 'Display "Private edit article" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/articles/private-edit-article'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
