let Light = 0
input.onButtonPressed(Button.A, function () {
    Light = input.lightLevel()
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("" + (Light))
})
