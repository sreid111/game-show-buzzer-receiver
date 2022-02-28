radio.onReceivedNumber(function (receivedNumber) {
    alreadyThere = 0
    for (let index = 0; index <= list.length; index++) {
        if (receivedNumber == list[index]) {
            fastest += 1
            if (fastest == 1) {
                radio.sendNumber(receivedNumber)
                led.toggle(3, 4)
                basic.pause(5000)
            }
            alreadyThere = 1
        }
    }
    if (alreadyThere == 0) {
        list.push(receivedNumber)
        radio.sendNumber(receivedNumber)
        plotLEDs()
    }
})
// Ready for next question.
input.onButtonPressed(Button.A, function () {
    fastest = 0
    led.toggle(4, 4)
    basic.pause(100)
    led.toggle(4, 4)
    led.toggle(3, 4)
})
function plotLEDs () {
    led.plot(x, y)
    if (x == 4) {
        y += 1
        x = 0
    } else {
        x += 1
    }
}
let alreadyThere = 0
let fastest = 0
let y = 0
let x = 0
let list: number[] = []
radio.setGroup(11)
list = []
x = 0
y = 0
fastest = 0
led.plot(4, 4)
