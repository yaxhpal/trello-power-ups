var gotError = function(data) {
    console.log('Failed: ' + JSON.stringify(data));
};
var allListNames = {};
var authenticationSuccess = function () {
    console.log('Successful authentication');
    window.Trello.get('boards/5e79ee85907182329109e3d5/lists', function(data) {
        if (data != null && data.length > 0) {
            console.log(JSON.stringify(data));
            data.forEach(list => {
                list_id = list['id'];
                list_name = list['name'];
                allListNames[list_id] = list_name
                console.log(`List id: ${list_id} and name: ${list_name}.`);
                window.Trello.get(`lists/${list_id}/cards`, function(data) {
                    cards_count = data.length;
                    list_id = data['idList'];
                    list_name = allListNames[list_id];
                    window.Trello.put(`lists/${list_id}`, {name: `${list_name}[${cards_count}]`});   
                }, gotError);
            });
        }
    },
    gotError);
};

window.Trello.authorize({
    type: 'popup',
    name: 'Getting Started Application',
    scope: {
        read: 'true',
        write: 'true'
    },
    expiration: 'never',
    interactive: 'false',
    success: authenticationSuccess,
    error: gotError
});