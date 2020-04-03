var btnCallback = function (t, opts) {
  console.log(JSON.stringify(t));
  console.log(JSON.stringify(opts));
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
        console.log(JSON.stringify(list));
        return [{
          text: "Get List Stats",
          callback: btnCallback
        }];
      });
    }
});

const fetch = require('node-fetch');
fetch('https://api.trello.com/1/lists/5e79eedda3843225f5d57f9b?name=Close[25]', {
  method: 'PUT'
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));