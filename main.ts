namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(Cursor.tileKindAt(TileDirection.Left, myTiles.tile1))) {
        grid.move(Cursor, -1, 0)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(Cursor.tileKindAt(TileDirection.Bottom, myTiles.tile1))) {
        grid.move(Cursor, 0, 1)
    }
})
function create_object (sprite: Sprite, x: number, y: number) {
    Objects.push(sprite)
    grid.snap(Objects[Objects.length - 1])
    grid.place(Objects[Objects.length - 1], tiles.getTileLocation(x, y))
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(Cursor.tileKindAt(TileDirection.Right, myTiles.tile1))) {
        grid.move(Cursor, 1, 0)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(Cursor.tileKindAt(TileDirection.Top, myTiles.tile1))) {
        grid.move(Cursor, 0, -1)
    }
})
function level_1 () {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010105080705050507080505010101010101060505050505050506080101010101010205050806050505050501010101010102020505050508050507010101010101040202020205050705050101010101010202020402020205050801010101010102030202030204020206010101010101020202020202020204020101010101010202020402030202020201010101010103020202020202020203010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,sprites.castle.tileGrass1,sprites.castle.tileGrass2,myTiles.tile3,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2],
            TileScale.Sixteen
        ))
    scene.setBackgroundColor(7)
    Cursor.setFlag(SpriteFlag.Invisible, false)
    SelectCursor.setFlag(SpriteFlag.Invisible, true)
    Cursor.setFlag(SpriteFlag.Ghost, true)
    SelectCursor.setFlag(SpriteFlag.Ghost, true)
    grid.snap(Cursor)
    grid.snap(SelectCursor)
    grid.place(Cursor, tiles.getTileLocation(5, 10))
    grid.place(SelectCursor, tiles.getTileLocation(5, 10))
    Objects = sprites.allOfKind(SpriteKind.Food)
    create_object(sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . d d d . . . . . . 
. . . . . . d b b b . . . . . . 
. . . . . . d b d d . . . . . . 
. . . . . . b d d d . . . . . . 
. . . . . . b c d b d . . . . . 
. . . . . . c b c b d d . . . . 
. . . . . . b d b d b d . . . . 
. . . . . c b d b d c d . . . . 
. . . . . c b b b d d b . . . . 
. . . . . c f b d b d d . . . . 
. . . . b c f b d d b d . . . . 
. . . . b c f d d d d . . . . . 
. . . . b f b d d d d . . . . . 
. . . b b f d d d d d b . . . . 
. . . d c b d d d d d d . . . . 
. . . . . b d d d d d d . . . . 
. . . . . b d d b d d d . . . . 
. . . . . b d d b d d d b . . . 
. c c c c b d d b d d d d c c . 
c d d d b b d b b d d d d b d c 
b d d b d b d b b d d b d b d b 
b d d b d d d b b d d b b b d b 
b d d d b d d b b d d b b d d b 
b d d d d b b b b b b b b d d b 
b d d d d d b b b b b d d d d b 
c d d d d d d d d d d d d d d c 
b c c d d d d d d d d d d c c b 
d b b b b b b b b b b b b b b d 
d b b b b c c c c c c b b b b d 
c b b b b b b b b b b b b b b c 
f c c c c c c c c c c c c c c f 
`, SpriteKind.Food), 11, 4)
    create_object(sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . d d d . . . . . . 
. . . . . . d b b b . . . . . . 
. . . . . . d b d d . . . . . . 
. . . . . . b d d d . . . . . . 
. . . . . . b c d b d . . . . . 
. . . . . . c b c b d d . . . . 
. . . . . . b d b d b d . . . . 
. . . . . c b d b d c d . . . . 
. . . . . c b b b d d b . . . . 
. . . . . c f b d b d d . . . . 
. . . . b c f b d d b d . . . . 
. . . . b c f d d d d . . . . . 
. . . . b f b d d d d . . . . . 
. . . b b f d d d d d b . . . . 
. . . d c b d d d d d d . . . . 
. . . . . b d d d d d d . . . . 
. . . . . b d d b d d d . . . . 
. . . . . b d d b d d d b . . . 
. c c c c b d d b d d d d c c . 
c d d d b b d b b d d d d b d c 
b d d b d b d b b d d b d b d b 
b d d b d d d b b d d b b b d b 
b d d d b d d b b d d b b d d b 
b d d d d b b b b b b b b d d b 
b d d d d d b b b b b d d d d b 
c d d d d d d d d d d d d d d c 
b c c d d d d d d d d d d c c b 
d b b b b b b b b b b b b b b d 
d b b b b c c c c c c b b b b d 
c b b b b b b b b b b b b b b c 
f c c c c c c c c c c c c c c f 
`, SpriteKind.Food), 8, 3)
    create_object(sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . d d d . . . . . . 
. . . . . . d b b b . . . . . . 
. . . . . . d b d d . . . . . . 
. . . . . . b d d d . . . . . . 
. . . . . . b c d b d . . . . . 
. . . . . . c b c b d d . . . . 
. . . . . . b d b d b d . . . . 
. . . . . c b d b d c d . . . . 
. . . . . c b b b d d b . . . . 
. . . . . c f b d b d d . . . . 
. . . . b c f b d d b d . . . . 
. . . . b c f d d d d . . . . . 
. . . . b f b d d d d . . . . . 
. . . b b f d d d d d b . . . . 
. . . d c b d d d d d d . . . . 
. . . . . b d d d d d d . . . . 
. . . . . b d d b d d d . . . . 
. . . . . b d d b d d d b . . . 
. c c c c b d d b d d d d c c . 
c d d d b b d b b d d d d b d c 
b d d b d b d b b d d b d b d b 
b d d b d d d b b d d b b b d b 
b d d d b d d b b d d b b d d b 
b d d d d b b b b b b b b d d b 
b d d d d d b b b b b d d d d b 
c d d d d d d d d d d d d d d c 
b c c d d d d d d d d d d c c b 
d b b b b b b b b b b b b b b d 
d b b b b c c c c c c b b b b d 
c b b b b b b b b b b b b b b c 
f c c c c c c c c c c c c c c f 
`, SpriteKind.Food), 10, 6)
    create_object(sprites.create(img`
. . . . . c c b b b . . . . . . 
. . . . c b d d d d b . . . . . 
. . . . c d d d d d d b b . . . 
. . . . c d d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. c c c c b b b b d d d b b b . 
. c d d b c b b b b b b b b d b 
c b b d d d b b b b b d d b d b 
c c b b d d d d d d d b b b d c 
c b c c c b b b b b b b d d c c 
c c b b c c c c b d d d b c c b 
. c c c c c c c c c c c b b b b 
. . c c c c c b b b b b b b c . 
. . . . . . c c b b b b c c . . 
. . . . . . . . c c c c . . . . 
`, SpriteKind.Food), 11, 11)
    create_object(sprites.create(img`
. . . . . . . . . b b b b . . . 
. . . . . . b b b d d d d b . . 
. . . . . . b d d d d d d b . . 
. . . . b b d d d d d b b d . . 
. . . . b d d d d d d b b d b . 
. . . . c d d d d d b b d b c . 
. . . b c c b b b b d d b c c . 
. . b b c c c b d d b c c c c . 
. b b d d d b b b b b b c c c c 
. c d d d d d d b d b c c c b c 
. c b d d d b b d b c c c b b c 
c b c c c c b d d b b b b b c c 
c c b b b d d b c c b b b b c c 
c c c c c c c c c b b b b c c . 
. c c c c b b b b b b b c c . . 
. . . . c c c c c c c c . . . . 
`, SpriteKind.Food), 6, 10)
    create_object(sprites.create(img`
. . . . . . . c c . . . . . . . 
. . . . c c c 6 5 c 6 6 . . . . 
. . . . c 6 c 5 5 c 7 6 . . . . 
. . . 6 c c 7 5 5 7 c 6 6 . . . 
. . c c 7 7 7 7 7 5 7 7 c 6 . . 
. 6 6 6 c 6 7 7 7 7 6 c c 6 6 . 
c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
. c c 7 6 6 6 6 6 7 7 7 7 c 6 . 
. c 7 7 6 6 7 6 6 7 7 6 7 7 c . 
. c c c c 7 7 6 f 7 7 c c c c . 
. . . . c 7 c f f c 7 c . . . . 
. . . . . 6 f e e e c . . . . . 
. . . . . e e e e e e . . . . . 
. . . . e e . e e . e e . . . . 
. . . . . . . e e . . . . . . . 
`, SpriteKind.Food), 4, 9)
    create_object(sprites.create(img`
. . . . . . . c c . . . . . . . 
. . . . c c c 6 5 c 6 6 . . . . 
. . . . c 6 c 5 5 c 7 6 . . . . 
. . . 6 c c 7 5 5 7 c 6 6 . . . 
. . c c 7 7 7 7 7 5 7 7 c 6 . . 
. 6 6 6 c 6 7 7 7 7 6 c c 6 6 . 
c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
. c c 7 6 6 6 6 6 7 7 7 7 c 6 . 
. c 7 7 6 6 7 6 6 7 7 6 7 7 c . 
. c c c c 7 7 6 f 7 7 c c c c . 
. . . . c 7 c f f c 7 c . . . . 
. . . . . 6 f e e e c . . . . . 
. . . . . e e e e e e . . . . . 
. . . . e e . e e . e e . . . . 
. . . . . . . e e . . . . . . . 
`, SpriteKind.Food), 7, 8)
    create_object(sprites.create(img`
. . . . . . . c c . . . . . . . 
. . . . c c c 6 5 c 6 6 . . . . 
. . . . c 6 c 5 5 c 7 6 . . . . 
. . . 6 c c 7 5 5 7 c 6 6 . . . 
. . c c 7 7 7 7 7 5 7 7 c 6 . . 
. 6 6 6 c 6 7 7 7 7 6 c c 6 6 . 
c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
. c c 7 6 6 6 6 6 7 7 7 7 c 6 . 
. c 7 7 6 6 7 6 6 7 7 6 7 7 c . 
. c c c c 7 7 6 f 7 7 c c c c . 
. . . . c 7 c f f c 7 c . . . . 
. . . . . 6 f e e e c . . . . . 
. . . . . e e e e e e . . . . . 
. . . . e e . e e . e e . . . . 
. . . . . . . e e . . . . . . . 
`, SpriteKind.Food), 9, 10)
    create_object(sprites.create(img`
. . . . . . . c c . . . . . . . 
. . . . c c c 6 5 c 6 6 . . . . 
. . . . c 6 c 5 5 c 7 6 . . . . 
. . . 6 c c 7 5 5 7 c 6 6 . . . 
. . c c 7 7 7 7 7 5 7 7 c 6 . . 
. 6 6 6 c 6 7 7 7 7 6 c c 6 6 . 
c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
. c c 7 6 6 6 6 6 7 7 7 7 c 6 . 
. c 7 7 6 6 7 6 6 7 7 6 7 7 c . 
. c c c c 7 7 6 f 7 7 c c c c . 
. . . . c 7 c f f c 7 c . . . . 
. . . . . 6 f e e e c . . . . . 
. . . . . e e e e e e . . . . . 
. . . . e e . e e . e e . . . . 
. . . . . . . e e . . . . . . . 
`, SpriteKind.Food), 8, 6)
    create_object(sprites.create(img`
. . . . . . . c c . . . . . . . 
. . . . c c c 6 5 c 6 6 . . . . 
. . . . c 6 c 5 5 c 7 6 . . . . 
. . . 6 c c 7 5 5 7 c 6 6 . . . 
. . c c 7 7 7 7 7 5 7 7 c 6 . . 
. 6 6 6 c 6 7 7 7 7 6 c c 6 6 . 
c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
. c c 7 6 6 6 6 6 7 7 7 7 c 6 . 
. c 7 7 6 6 7 6 6 7 7 6 7 7 c . 
. c c c c 7 7 6 f 7 7 c c c c . 
. . . . c 7 c f f c 7 c . . . . 
. . . . . 6 f e e e c . . . . . 
. . . . . e e e e e e . . . . . 
. . . . e e . e e . e e . . . . 
. . . . . . . e e . . . . . . . 
`, SpriteKind.Food), 5, 4)
    create_object(sprites.create(img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. b b d d b b . 
b 1 1 3 3 1 1 b 
b 1 3 5 5 3 1 b 
b d 3 5 5 3 d b 
c 1 1 d d 1 1 c 
c d 1 d d 1 d c 
. c c 7 6 c c . 
. . 6 7 6 . . . 
. . 6 6 8 8 8 6 
. . 6 8 7 7 7 6 
. . 8 7 7 7 6 . 
. . 8 8 8 6 . . 
`, SpriteKind.Food), 9, 11)
    create_object(sprites.create(img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. b b d d b b . 
b 1 1 3 3 1 1 b 
b 1 3 5 5 3 1 b 
b d 3 5 5 3 d b 
c 1 1 d d 1 1 c 
c d 1 d d 1 d c 
. c c 7 6 c c . 
. . 6 7 6 . . . 
. . 6 6 8 8 8 6 
. . 6 8 7 7 7 6 
. . 8 7 7 7 6 . 
. . 8 8 8 6 . . 
`, SpriteKind.Food), 6, 3)
    create_object(sprites.create(img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. b b d d b b . 
b 1 1 3 3 1 1 b 
b 1 3 5 5 3 1 b 
b d 3 5 5 3 d b 
c 1 1 d d 1 1 c 
c d 1 d d 1 d c 
. c c 7 6 c c . 
. . 6 7 6 . . . 
. . 6 6 8 8 8 6 
. . 6 8 7 7 7 6 
. . 8 7 7 7 6 . 
. . 8 8 8 6 . . 
`, SpriteKind.Food), 9, 5)
    create_object(sprites.create(img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . c c c . . . 
. c c 6 6 c . . 
c c 3 3 f 6 c . 
c 6 c f 6 3 c . 
c 3 6 3 3 3 c . 
c 3 6 6 3 3 c . 
c 3 3 6 6 3 c . 
. c 3 3 3 6 . . 
. . 6 7 6 . . . 
. . 6 6 8 8 8 6 
. . 6 8 7 7 7 6 
. . 8 7 7 7 6 . 
. . 8 8 8 6 . . 
`, SpriteKind.Food), 12, 5)
    create_object(sprites.create(img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . c c c . . . 
. c c 6 6 c . . 
c c 3 3 f 6 c . 
c 6 c f 6 3 c . 
c 3 6 3 3 3 c . 
c 3 6 6 3 3 c . 
c 3 3 6 6 3 c . 
. c 3 3 3 6 . . 
. . 6 7 6 . . . 
. . 6 6 8 8 8 6 
. . 6 8 7 7 7 6 
. . 8 7 7 7 6 . 
. . 8 8 8 6 . . 
`, SpriteKind.Food), 12, 7)
    create_object(sprites.create(img`
. . . . . . b b b b . . . . . . 
. . . . b b 3 3 3 3 b b . . . . 
. . . c b 3 3 3 3 1 1 b c . . . 
. . c b 3 3 3 3 3 1 1 1 b c . . 
. c c 1 1 1 3 3 3 3 1 1 3 c c . 
c c d 1 1 1 3 3 3 3 3 3 3 b c c 
c b d d 1 3 3 3 3 3 1 1 1 b b c 
c b b b 3 3 1 1 3 3 1 1 d d b c 
c b b b b d d 1 1 3 b d d d b c 
. c b b b b d d b b b b b b c . 
. . c c b b b b b b b b c c . . 
. . . . c c c c c c c c . . . . 
. . . . . . b 1 1 b . . . . . . 
. . . . . . b 1 1 b b . . . . . 
. . . . . b b d 1 1 b . . . . . 
. . . . . b d d 1 1 b . . . . . 
`, SpriteKind.Food), 11, 6)
    create_object(sprites.create(img`
. . . . . . b b b b . . . . . . 
. . . . b b 3 3 3 3 b b . . . . 
. . . c b 3 3 3 3 1 1 b c . . . 
. . c b 3 3 3 3 3 1 1 1 b c . . 
. c c 1 1 1 3 3 3 3 1 1 3 c c . 
c c d 1 1 1 3 3 3 3 3 3 3 b c c 
c b d d 1 3 3 3 3 3 1 1 1 b b c 
c b b b 3 3 1 1 3 3 1 1 d d b c 
c b b b b d d 1 1 3 b d d d b c 
. c b b b b d d b b b b b b c . 
. . c c b b b b b b b b c c . . 
. . . . c c c c c c c c . . . . 
. . . . . . b 1 1 b . . . . . . 
. . . . . . b 1 1 b b . . . . . 
. . . . . b b d 1 1 b . . . . . 
. . . . . b d d 1 1 b . . . . . 
`, SpriteKind.Food), 11, 7)
    create_object(sprites.create(img`
. . . . . . b b b b . . . . . . 
. . . . b b 3 3 3 3 b b . . . . 
. . . c b 3 3 3 3 1 1 b c . . . 
. . c b 3 3 3 3 3 1 1 1 b c . . 
. c c 1 1 1 3 3 3 3 1 1 3 c c . 
c c d 1 1 1 3 3 3 3 3 3 3 b c c 
c b d d 1 3 3 3 3 3 1 1 1 b b c 
c b b b 3 3 1 1 3 3 1 1 d d b c 
c b b b b d d 1 1 3 b d d d b c 
. c b b b b d d b b b b b b c . 
. . c c b b b b b b b b c c . . 
. . . . c c c c c c c c . . . . 
. . . . . . b 1 1 b . . . . . . 
. . . . . . b 1 1 b b . . . . . 
. . . . . b b d 1 1 b . . . . . 
. . . . . b d d 1 1 b . . . . . 
`, SpriteKind.Food), 9, 4)
    create_object(sprites.create(img`
. . . . . b b b b b b . . . . . 
. . . b b d d d d d d b b . . . 
. . b b d d b b b b d d b b . . 
. e d b d b d d d d b d b d e . 
. f d b d d b b b b d d b d e . 
. f b d b b d d d d b b d b e . 
. f e d d d b b b b d d d e e . 
. f f e b d d d d d d b e e f . 
. f f e e e e e e e e e e e f . 
. f f e e e f e e e e e e e f . 
. f f e f e e e f f e e f e e f 
. f e e f e f e f e f e f e e e 
f f e e e e f e e f f e f f e e 
f e e e e f f e e e e e f f f e 
e e e e f f f e f e e e e f f f 
e e e e f f f e f e e e e f f f 
`, SpriteKind.Food), 7, 5)
    create_object(sprites.create(img`
. . . . . b b b b b b . . . . . 
. . . b b d d d d d d b b . . . 
. . b b d d b b b b d d b b . . 
. e d b d b d d d d b d b d e . 
. f d b d d b b b b d d b d e . 
. f b d b b d d d d b b d b e . 
. f e d d d b b b b d d d e e . 
. f f e b d d d d d d b e e f . 
. f f e e e e e e e e e e e f . 
. f f e e e f e e e e e e e f . 
. f f e f e e e f f e e f e e f 
. f e e f e f e f e f e f e e e 
f f e e e e f e e f f e f f e e 
f e e e e f f e e e e e f f f e 
e e e e f f f e f e e e e f f f 
e e e e f f f e f e e e e f f f 
`, SpriteKind.Food), 5, 7)
    create_object(sprites.create(img`
. . . . . b b b b b b . . . . . 
. . . b b d d d d d d b b . . . 
. . b b d d b b b b d d b b . . 
. e d b d b d d d d b d b d e . 
. f d b d d b b b b d d b d e . 
. f b d b b d d d d b b d b e . 
. f e d d d b b b b d d d e e . 
. f f e b d d d d d d b e e f . 
. f f e e e e e e e e e e e f . 
. f f e e e f e e e e e e e f . 
. f f e f e e e f f e e f e e f 
. f e e f e f e f e f e f e e e 
f f e e e e f e e f f e f f e e 
f e e e e f f e e e e e f f f e 
e e e e f f f e f e e e e f f f 
e e e e f f f e f e e e e f f f 
`, SpriteKind.Food), 3, 5)
}
let Objects: Sprite[] = []
let SelectCursor: Sprite = null
let Cursor: Sprite = null
Cursor = sprites.create(img`
5 5 5 5 5 . . . . . . . 5 5 5 5 
5 . . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . . 5 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
5 . . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . . 5 
5 . . . . . . . . . . . . . . 5 
5 5 5 5 5 . . . . . . 5 5 5 5 5 
`, SpriteKind.Player)
SelectCursor = sprites.create(img`
2 2 2 2 2 . . . . . . . 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 . . . . . . 2 2 2 2 2 
`, SpriteKind.Player)
let Camera = sprites.create(img`
. 
`, SpriteKind.Player)
Cursor.setFlag(SpriteFlag.Invisible, true)
SelectCursor.setFlag(SpriteFlag.Invisible, true)
if (false) {
    Camera.follow(Cursor, 30)
} else {
    Camera.follow(Cursor, 250)
}
scene.cameraFollowSprite(Camera)
scene.setBackgroundColor(9)
level_1()
