const magik = magikcraft.io;

function boom() {
    let strikes = 0;
    var timer = magik.setInterval(() => {
        magik.shakti();
        if (strikes++ > 10) {
            magik.clearInterval(timer);
        }
    }, 1000);
}
