const year = [
    {
        month: "January",
        id: "jan",
        nth: 1,
        days: 31,
    },
    {
        month: "February",
        id: "febr",
        nth: 2,
        days: 28,
    },
    {
        month: "March",
        id: "marc",
        nth: 3,
        days: 31,
    },
    {
        month: "April",
        id: "apr",
        nth: 4,
        days: 30,
    },
    {
        month: "May",
        id: "may",
        nth: 5,
        days: 31,
    },
    {
        month: "June",
        id: "june",
        nth: 6,
        days: 30,
    },
    {
        month: "July",
        id: "july",
        nth: 7,
        days: 31,
    },
    {
        month: "August",
        id: "aug",
        nth: 8,
        days: 31,
    },
    {
        month: "September",
        id: "sept",
        nth: 9,
        days: 30,
    },
    {
        month: "October",
        id: "oct",
        nth: 10,
        days: 31,
    },
    {
        month: "November",
        id: "nov",
        nth: 11,
        days: 30,
    },
    {
        month: "December",
        id: "dec",
        nth: 12,
        days: 31,
    },
];

const monthComponent = function (nth, name, days) {
    let daysHTML = "";

    for (let i = 1; i <= days; i++) {
        daysHTML += dayComponent(i);
    }

    return `
    <section id="${nth}" class="${name}">    
    <h2>${name}</h2>
    <div class = "days">${daysHTML}</div>
    <div class="selected-day"></div>

   </section>
    `;
};

const dayComponent = function (dayCount) {
    return `
        <div class="day">${dayCount}</div>
    `;
};

const rootElement = document.querySelector("#root");

for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
    rootElement.insertAdjacentHTML(
        "beforeend",
        monthComponent(
            year[monthIndex].nth,
            year[monthIndex].month,
            year[monthIndex].days
        )
    );
}

const sectionElements = document.querySelectorAll("section");

for (let i = 0; i < sectionElements.length; i++) {
    sectionElements[i].addEventListener("mouseover", function () {
        sectionElements[i].style.filter = `grayscale(0%)`;
        sectionElements[i].style.transition = `all 0.3s ease-out`;
    });

    sectionElements[i].addEventListener("mouseout", function () {
        sectionElements[i].style.filter = ``;
    });
}

const dayElements = document.querySelectorAll(".day");

for (let i = 0; i < dayElements.length; i++) {
    dayElements[i].addEventListener("mouseover", function () {
        dayElements[i].style.transform = `rotate(360deg)`;
    });

    dayElements[i].addEventListener("mouseout", function () {
        dayElements[i].style.transform = ``;
    });
}

for (let i = 0; i < dayElements.length; i++) {
    dayElements[i].addEventListener("click", function () {
        dayElements[i].classList.toggle("clicked");
    });
}
