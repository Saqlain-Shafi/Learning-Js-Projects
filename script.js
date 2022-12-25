setInterval(() => {
    day = new Date();
    const hh = day.getHours();
    const mm = day.getMinutes();
    const ss = day.getSeconds();
    //formulas for rotation of hands
    hRotation = 30 * hh + mm / 2;
    mRotation = 6 * mm;
    sRotation = 6 * ss;

    const Hour = document.querySelector('.hour');
    const Minute = document.querySelector('.minute');
    const Second = document.querySelector('.second');

    Hour.style.transform = `rotate(${hRotation}deg)`;
    Minute.style.transform = `rotate(${mRotation}deg)`;
    Second.style.transform = `rotate(${sRotation}deg)`;
}, 1000)
