input.onButtonPressed(Button.A, function () {
    gameIsOn = 1
    foodInTheTummy = startFoodInTheTummy
})
input.onButtonPressed(Button.B, function () {
    foodInTheTummy += randint(0, mouthSize)
})
let foodInTheTummy = 0
let gameIsOn = 0
let mouthSize = 0
let startFoodInTheTummy = 0
startFoodInTheTummy = 5
let maxFoodInTheTummy = 50
let minFoodInTheTummy = 0
let hungerFactor = 6
mouthSize = 3
let second = 1000
let hunger = 1
basic.showArrow(ArrowNames.West)
basic.forever(function () {
    if (gameIsOn) {
        foodInTheTummy += -1 * hunger / hungerFactor
        led.plotBarGraph(
        foodInTheTummy,
        maxFoodInTheTummy
        )
        if (foodInTheTummy >= maxFoodInTheTummy || foodInTheTummy < minFoodInTheTummy) {
            basic.showIcon(IconNames.Skull)
            music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
            gameIsOn = 0
            foodInTheTummy = startFoodInTheTummy
            basic.pause(second)
            basic.showArrow(ArrowNames.West)
        }
        hunger += 1
        basic.pause(second)
    }
})
