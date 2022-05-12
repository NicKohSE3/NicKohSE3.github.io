class DigitalClock {
    constructor(element) {
        this.element = element;
    }

    start() {
        this.update();

        setInterval(() => {
            this.update();
        }, 1)
    }


    update() {
        const PARTS = this.getTimeParts();
        const MINUTE_FORMATTED = PARTS.minute.toString().padStart(2, "0");
        const TIME_FORMATTED = `${PARTS.hour}:${MINUTE_FORMATTED}`;
        const AM_PM = PARTS.isAm ? "AM" : "PM";

        this.element.querySelector(".clock-time").textContent = TIME_FORMATTED;
        this.element.querySelector(".clock-ampm").textContent = AM_PM;

        // console.log("The time now is - " + TIME_FORMATTED);
    }

    getTimeParts() {
        const NOW = new Date();

        return {
            hour: NOW.getHours() % 12 || 12,
            minute: NOW.getMinutes(),
            isAm: NOW.getHours() < 12
        }
    }
}

const CLOCK_ELEMENT = document.querySelector(".clock");
const CLOCK_OBJECT = new DigitalClock(CLOCK_ELEMENT);

CLOCK_OBJECT.start();