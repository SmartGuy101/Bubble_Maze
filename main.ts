scene.onOverlapTile(SpriteKind.Player, assets.tile`End Tile`, function (sprite, location) {
    game.over(true, effects.confetti)
})
info.setLife(3)
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(13)
let MyPlayer = sprites.create(img`
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 . . . . 6 6 . . . . 
    . . . 6 . . . . . 9 9 . 6 . . . 
    . . 6 . . . . . . 1 1 9 . 6 . . 
    . 6 . . . . . . . . . 1 9 . 6 . 
    . 6 . . 1 . . . . . . . 1 9 6 . 
    6 . . . . . . . . . . . 1 9 . 6 
    6 . . . . . . . . . . . . . . 6 
    6 . . . . . . . . . . . . . . 6 
    6 . . . . . . . . . . . . . . 6 
    . 6 . 9 1 . . . . . . . 9 . 6 . 
    . 6 . 9 1 . . . . . . 9 9 . 6 . 
    . . 6 . 9 1 . . . . . 9 . 6 . . 
    . . . 6 . 9 1 1 . . . . 6 . . . 
    . . . . 6 6 . . . . 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(MyPlayer, tiles.getTileLocation(1, 1))
controller.moveSprite(MyPlayer)
scene.cameraFollowSprite(MyPlayer)
forever(function () {
    if (MyPlayer.tileKindAt(TileDirection.Center, assets.tile`Spike2`)) {
        info.changeLifeBy(-1)
        MyPlayer.y += -25
        scene.cameraShake(4, 500)
        MyPlayer.say("!OOF!", 3000)
    }
})
