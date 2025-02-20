namespace SpriteKind {
    export const goal_1 = SpriteKind.create()
    export const goal_2 = SpriteKind.create()
    export const goal_3 = SpriteKind.create()
    export const goal_8 = SpriteKind.create()
    export const goal_5 = SpriteKind.create()
    export const goal_6 = SpriteKind.create()
    export const goal_7 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.goal_8, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (controller.right.isPressed()) {
        goal_4.startEffect(effects.fire, 500)
        sprites.destroy(otherSprite)
        info.changeScoreBy(1)
    }
})
sprites.onOverlap(SpriteKind.goal_3, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (controller.left.isPressed()) {
        goal_3.startEffect(effects.fire, 500)
        sprites.destroy(otherSprite)
        info.changeScoreBy(1)
    }
})
sprites.onOverlap(SpriteKind.goal_2, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (controller.down.isPressed()) {
        goal_2.startEffect(effects.fire, 500)
        sprites.destroy(otherSprite)
        info.changeScoreBy(1)
    }
})
sprites.onOverlap(SpriteKind.goal_1, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (controller.up.isPressed()) {
        goal_1.startEffect(effects.fire, 500)
        sprites.destroy(otherSprite)
        info.changeScoreBy(1)
    }
})
let right: Sprite = null
let left: Sprite = null
let down: Sprite = null
let up: Sprite = null
let goal_8: Sprite = null
let goal_7: Sprite = null
let goal_6: Sprite = null
let goal_5: Sprite = null
let goal_4: Sprite = null
let goal_3: Sprite = null
let goal_2: Sprite = null
let goal_1: Sprite = null
info.setScore(0)
let enemy_spawn = 800
let ememy_speed = 50
scene.setBackgroundImage(assets.image`background`)
goal_1 = sprites.create(img`
    . . 9 9 9 9 9 9 9 . . 
    . 9 . . . . . . . 9 . 
    9 . . 9 9 9 9 9 . . 9 
    9 . 9 . . . . . 9 . 9 
    9 . 9 . . . . . 9 . 9 
    9 . 9 . . 9 . . 9 . 9 
    9 . 9 . . . . . 9 . 9 
    9 . 9 . . . . . 9 . 9 
    9 . . 9 9 9 9 9 . . 9 
    . 9 . . . . . . . 9 . 
    . . 9 9 9 9 9 9 9 . . 
    `, SpriteKind.goal_1)
goal_1.setPosition(6, 110)
goal_2 = sprites.create(img`
    . . 9 9 9 9 9 9 9 . . 
    . 9 . . . . . . . 9 . 
    9 . . 9 9 9 9 9 . . 9 
    9 . 9 . . . . . 9 . 9 
    9 . 9 . . . . . 9 . 9 
    9 . 9 . . 9 . . 9 . 9 
    9 . 9 . . . . . 9 . 9 
    9 . 9 . . . . . 9 . 9 
    9 . . 9 9 9 9 9 . . 9 
    . 9 . . . . . . . 9 . 
    . . 9 9 9 9 9 9 9 . . 
    `, SpriteKind.goal_2)
goal_2.setPosition(17, 110)
goal_3 = sprites.create(img`
    . . 9 9 9 9 9 9 9 . . 
    . 9 . . . . . . . 9 . 
    9 . . 9 9 9 9 9 . . 9 
    9 . 9 . . . . . 9 . 9 
    9 . 9 . . . . . 9 . 9 
    9 . 9 . . 9 . . 9 . 9 
    9 . 9 . . . . . 9 . 9 
    9 . 9 . . . . . 9 . 9 
    9 . . 9 9 9 9 9 . . 9 
    . 9 . . . . . . . 9 . 
    . . 9 9 9 9 9 9 9 . . 
    `, SpriteKind.goal_3)
goal_3.setPosition(28, 110)
goal_4 = sprites.create(img`
    . . 9 9 9 9 9 9 9 . . 
    . 9 . . . . . . . 9 . 
    9 . . 9 9 9 9 9 . . 9 
    9 . 9 . . . . . 9 . 9 
    9 . 9 . . . . . 9 . 9 
    9 . 9 . . 9 . . 9 . 9 
    9 . 9 . . . . . 9 . 9 
    9 . 9 . . . . . 9 . 9 
    9 . . 9 9 9 9 9 . . 9 
    . 9 . . . . . . . 9 . 
    . . 9 9 9 9 9 9 9 . . 
    `, SpriteKind.goal_8)
goal_4.setPosition(39, 110)
if (true) {
    goal_5 = sprites.create(img`
        . . 9 9 9 9 9 9 9 . . 
        . 9 . . . . . . . 9 . 
        9 . . 9 9 9 9 9 . . 9 
        9 . 9 . . . . . 9 . 9 
        9 . 9 . . . . . 9 . 9 
        9 . 9 . . 9 . . 9 . 9 
        9 . 9 . . . . . 9 . 9 
        9 . 9 . . . . . 9 . 9 
        9 . . 9 9 9 9 9 . . 9 
        . 9 . . . . . . . 9 . 
        . . 9 9 9 9 9 9 9 . . 
        `, SpriteKind.goal_5)
    goal_5.setPosition(122, 110)
    goal_6 = sprites.create(img`
        . . 9 9 9 9 9 9 9 . . 
        . 9 . . . . . . . 9 . 
        9 . . 9 9 9 9 9 . . 9 
        9 . 9 . . . . . 9 . 9 
        9 . 9 . . . . . 9 . 9 
        9 . 9 . . 9 . . 9 . 9 
        9 . 9 . . . . . 9 . 9 
        9 . 9 . . . . . 9 . 9 
        9 . . 9 9 9 9 9 . . 9 
        . 9 . . . . . . . 9 . 
        . . 9 9 9 9 9 9 9 . . 
        `, SpriteKind.goal_6)
    goal_6.setPosition(133, 110)
    goal_7 = sprites.create(img`
        . . 9 9 9 9 9 9 9 . . 
        . 9 . . . . . . . 9 . 
        9 . . 9 9 9 9 9 . . 9 
        9 . 9 . . . . . 9 . 9 
        9 . 9 . . . . . 9 . 9 
        9 . 9 . . 9 . . 9 . 9 
        9 . 9 . . . . . 9 . 9 
        9 . 9 . . . . . 9 . 9 
        9 . . 9 9 9 9 9 . . 9 
        . 9 . . . . . . . 9 . 
        . . 9 9 9 9 9 9 9 . . 
        `, SpriteKind.goal_7)
    goal_7.setPosition(144, 110)
    goal_8 = sprites.create(img`
        . . 9 9 9 9 9 9 9 . . 
        . 9 . . . . . . . 9 . 
        9 . . 9 9 9 9 9 . . 9 
        9 . 9 . . . . . 9 . 9 
        9 . 9 . . . . . 9 . 9 
        9 . 9 . . 9 . . 9 . 9 
        9 . 9 . . . . . 9 . 9 
        9 . 9 . . . . . 9 . 9 
        9 . . 9 9 9 9 9 . . 9 
        . 9 . . . . . . . 9 . 
        . . 9 9 9 9 9 9 9 . . 
        `, SpriteKind.goal_8)
    goal_8.setPosition(155, 110)
}
forever(function () {
    if (randint(1, 4) == 1) {
        up = sprites.createProjectileFromSide(assets.image`myImage`, 0, ememy_speed)
        up.x = 6
        up.setFlag(SpriteFlag.AutoDestroy, true)
    } else if (randint(1, 4) == 2) {
        down = sprites.createProjectileFromSide(assets.image`myImage5`, 0, ememy_speed)
        down.x = 17
        down.setFlag(SpriteFlag.AutoDestroy, true)
    } else if (randint(1, 4) == 3) {
        left = sprites.createProjectileFromSide(assets.image`myImage3`, 0, ememy_speed)
        left.x = 28
        left.setFlag(SpriteFlag.AutoDestroy, true)
    } else if (randint(1, 4) == 4) {
        right = sprites.createProjectileFromSide(assets.image`myImage4`, 0, ememy_speed)
        right.x = 39
        right.setFlag(SpriteFlag.AutoDestroy, true)
    }
    pause(enemy_spawn)
})
game.onUpdateInterval(3000, function () {
    ememy_speed += 1.2
    ememy_speed = Math.min(ememy_speed, 180)
    enemy_spawn += -40
    enemy_spawn = Math.max(enemy_spawn, 30)
})
