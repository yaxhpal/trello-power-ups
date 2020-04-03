console.log('Hurray! I am called.');

var btnCallback = function (t, opts) {
  return t.popup({
    title: 'List Stats',
    url: '../html/list-stats.html',
    args: { myArgs: 'You can access these with t.arg()' },
    height: 278 // initial height, can be changed later
  });
};

window.TrelloPowerUp.initialize({
    'list-actions': function (t) {
      return t.list('name', 'id')
      .then(function (list) {
        console.log(JSON.stringify(list, null, 2));
        return [{
          text: "Get List Stats",
          callback: btnCallback
        }];
      });
    }
});