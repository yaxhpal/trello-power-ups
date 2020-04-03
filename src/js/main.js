console.log('Hurray! I am called.');

var btnCallback = function (t, opts) {
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
        console.log(JSON.stringify(list, null, 2));
        return [{
          text: "Get List Stats",
          callback: btnCallback
        }];
      });
    }
});


// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch
import fetch from 'node-fetch';
listName = 'Close[25]';
fetch('https://api.trello.com/1/lists/5e79eedda3843225f5d57f9b?name='+listName, {
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