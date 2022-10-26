let michelangelo = 0
let da_vinci = 0
input.onButtonPressed(Button.A, function () {
    michelangelo = 0
    da_vinci = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(michelangelo, da_vinci)
            michelangelo += 1
            basic.pause(200)
        }
        da_vinci += 1
        michelangelo = 0
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    michelangelo = 0
    da_vinci = 0
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(michelangelo, da_vinci)
            michelangelo += 1
            basic.pause(200)
        }
        da_vinci += 1
        michelangelo = 4
        for (let index = 0; index < 5; index++) {
            led.plot(michelangelo, da_vinci)
            michelangelo += -1
            basic.pause(200)
        }
        da_vinci += 1
        michelangelo = 0
    }
    basic.clearScreen()
})
basic.forever(function () {
	
})
