
/*
var table = document.createElement('table');
for (var i = 1; i < 4; i++){
    var tr = document.createElement('tr');   

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');

    var text1 = document.createTextNode('Text1');
    var text2 = document.createTextNode('Text2');

    td1.appendChild(text1);
    td2.appendChild(text2);
    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);
}
document.body.appendChild(table);
*/


var tileMap = new Map();



function createNewTile (tileId) {
	var newTile = document.createElement('div');
    $(newTile).html(tileId)
                .attr('id', tileId);

    return newTile;
}

function handleTile(tileId) {
    if(tileMap.has(tileId)) {
        tileMap.delete(tileId);

        $('#tile_area').find('#' + tileId).remove();
    } else {
        var newTile = createNewTile(tileId);
        tileMap.set(tileId, newTile)

        $('#tile_area').append(newTile);
    }
    
}

function handleInput() {
    var input_text = $('#input_form :input[name="textField"]').val();

    handleTile(input_text);

    console.log('input:' + input_text);

}



//$(document).ready();











console.log('Working!')