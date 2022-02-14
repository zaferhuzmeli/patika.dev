(function () {
    const self = [];

    self.init = function () {
        self.getName();
        self.showTime();
    };


    self.getName = function () {
        const newLocal = "What is your name?";
        const name = prompt(newLocal);
        document.getElementById("myName").innerText = name;
    }

    self.showTime = function () {
        const date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        const weekdayNumber = date.getDay();

        const arrayOfWeekdays = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
        const weekdayName = arrayOfWeekdays[weekdayNumber];

        h = h < 10 ? `0${h}` : h;
        m = m < 10 ? `0${m}` : m;
        s = s < 10 ? `0${s}` : s;

        const time = `${h}:${m}:${s} ${weekdayName}`;
        document.getElementById("myClock").innerText = time;
        document.getElementById("myClock").textContent = time;

        setTimeout(showTime, 1000);
    }

    self.init();
})();