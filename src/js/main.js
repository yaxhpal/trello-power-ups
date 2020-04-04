var btnCallback = function (t, opts) {
  window.Trello.put('/lists/5e79eedda3843225f5d57f9b', {name: 'Closed[]'});
  return t.popup({
    title: 'List Stats',
    url: 'list-stats.html',
    args: { nargs: opts},
    height: 278 // initial height, can be changed later
  });
};

window.TrelloPowerUp.initialize({
    'list-actions': function (t) {
      return t.list('name', 'id')
      .then(function (list) {
        return [{
          text: "Get List Stats",
          callback: btnCallback
        }];
      });
    }
});