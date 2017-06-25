

var tileMap = new Map();
var executionDisableReason = ['ed_last_look',
                        'ed_zero_volume',
                        'ed_bad_tick',
                        'ed_bad_price',
                        'ed_wide_spread',
                        'ed_manual'];

//  CLASS BEGIN
//  DisableReasonMapper
class DisableReasonMapper {
    constructor() {
        this.mapping = new Map()
            .set("EXECUTION_DISABLE_LAST_LOOK", "ed_last_look")
            .set("EXECUTION_DISABLE_ZERO_VOLUME", "ed_zero_volume")
            .set("EXECUTION_DISABLE_BAD_TICK", "ed_bad_tick")
            .set("EXECUTION_DISABLE_BAD_PRICE", "ed_bad_price")
            .set("EXECUTION_DISABLE_WIDE_SPREAD", "ed_wide_spread")
            .set("EXECUTION_DISABLE_MANUAL", "ed_manual");

    }

    toStyleName() {
        return this.mapping.has()
    }
}
//  CLASS END


//  CLASS BEGIN
//  TileFactory
class TileFactory {
    constructor() {
        this.currentDivID = 1; 
    }

    createTile(tileName) {
        var ret = new Tile(tileName, this.currentDivID);
        this.currentDivID++;
        return ret;
    }

    createTile(tileName, tileId) {
        var ret = new Tile(tileName, tileId);
        return ret;
    }
}
//  CLASS END


//  CLASS BEGIN 
//  Tile 
function Tile(name, divId) {
    this.name = name;
    this.divId = divId;

    this.asElement = document.createElement('div');
    $(this.asElement).html(this.name)
        .addClass('tile')
        .attr('id', this.divId);

}
Tile.prototype.getAsElement = function() {
    return this.asElement; 
}
Tile.prototype.getDivId = function() {
    return this.divId;
}

//  CLASS END


function handleTile(tileId) {
    if(tileMap.has(tileId)) {
        var tile = tileMap.get(tileId);
        tileMap.delete(tileId);

        $('#tile_area').find('#' + tile.getDivId()).remove();
    } else {
        tileFactory.createTile

        var newTile = tileFactory.createTile(tileId, tileId);
        tileMap.set(tileId, newTile)

        $('#tile_area').append(newTile.getAsElement());
    }
    
}

function handleInput() {
    var input_text = $('#input_form :input[name="textField"]').val();

    handleTile(input_text);

    console.log('input:' + input_text);

}


var tileFactory = new TileFactory();

$(document).ready(console.log('Working!'));



