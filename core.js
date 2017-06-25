

var tileMap = new Map();
var executionDisableReason = ['ed_last_look', 'ed_zero_volume',
                        'ed_bad_tick', 'ed_bad_price', 'ed_wide_spread', 'ed_manual'];



function createNewTile (tileId) {
	var newTile = document.createElement('div');
    var randReason = executionDisableReason[Math.floor(Math.random() * executionDisableReason.length)];
    
    $(newTile).html(tileId)
        .addClass('tile')
        .addClass(randReason)
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



$(document).ready(console.log('Working!'));



