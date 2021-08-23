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
