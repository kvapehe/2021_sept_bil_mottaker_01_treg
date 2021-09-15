/**
 * Bil mottaker:
 * 
 * https://makecode.microbit.org/_hzKX3cEYh4jd
 * 
 * Treg og ustabil
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showArrow(ArrowNames.North)
        bitbot.go(BBDirection.Forward, 100)
    } else if (receivedNumber == 2) {
        basic.showArrow(ArrowNames.West)
        bitbot.rotate(BBRobotDirection.Right, 100)
    } else if (receivedNumber == 3) {
        basic.showArrow(ArrowNames.East)
        bitbot.rotate(BBRobotDirection.Left, 100)
    } else if (receivedNumber == 4) {
        basic.showIcon(IconNames.Butterfly)
        bitbot.stop(BBStopMode.Coast)
    } else {
        bitbot.stop(BBStopMode.Coast)
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.A, function () {
    tall = 2
})
input.onButtonPressed(Button.B, function () {
    tall = 3
})
let tall = 0
radio.setGroup(150)
bitbot.select_model(BBModel.XL)
tall = 0
basic.forever(function () {
	
})
