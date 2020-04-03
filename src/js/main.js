console.log('Hurray! I am called.');
window.TrelloPowerUp.initialize({
    'list-actions': function (t) {
      return t.list('name', 'id')
      .then(function (list) {
        console.log(JSON.stringify(list, null, 2));
        return [{
          text: "Get List Stats",
          callback: function (t) {
            // Trello will call this if the user clicks on this action
            // we could for example open a new popover...
            t.popup({
            });
          }
        }];
      });
    }
  });