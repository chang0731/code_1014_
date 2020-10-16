basic.forever(function () {
    for (let Y = 0; Y <= 4; Y++) {
        for (let Y = 0; Y <= 4; Y++) {
            let X = 0
            led.plot(X, Y)
            basic.pause(200)
        }
        for (let Y = 0; Y <= 4; Y++) {
            led.plot(1, 4)
            basic.pause(200)
            led.plot(1, 3)
            basic.pause(200)
            led.plot(1, 2)
            basic.pause(200)
            led.plot(1, 1)
            basic.pause(200)
            led.plot(1, 0)
            basic.pause(200)
            for (let Y = 0; Y <= 4; Y++) {
                led.plot(2, 0)
                basic.pause(200)
                led.plot(2, 1)
                basic.pause(200)
                led.plot(2, 2)
                basic.pause(200)
                led.plot(2, 3)
                basic.pause(200)
                led.plot(2, 4)
                basic.pause(200)
                for (let Y = 0; Y <= 4; Y++) {
                    led.plot(3, 4)
                    basic.pause(200)
                    led.plot(3, 3)
                    basic.pause(200)
                    led.plot(3, 2)
                    basic.pause(200)
                    led.plot(3, 1)
                    basic.pause(200)
                    led.plot(3, 0)
                    basic.pause(200)
                    for (let Y = 0; Y <= 4; Y++) {
                        led.plot(4, 0)
                        basic.pause(200)
                        led.plot(4, 1)
                        basic.pause(200)
                        led.plot(4, 2)
                        basic.pause(200)
                        led.plot(4, 3)
                        basic.pause(200)
                        led.plot(4, 4)
                        basic.pause(200)
                    }
                }
            }
        }
    }
})
