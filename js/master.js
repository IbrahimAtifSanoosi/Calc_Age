const inputDay = document.querySelector(".day");
const inputMonth = document.querySelector(".month");
const inputYear = document.querySelector(".year");
const yearResult = document.querySelector(".year-result");
const monthResult = document.querySelector(".month-result");
const dayResult = document.querySelector(".day-result");
const titlePargraph = document.querySelectorAll(".title");
const validYear = document.querySelector(".date");
const dayErrorP = document.querySelector(".valid-day")
const monthErrorP = document.querySelector(".valid-month")
const yearErrorP = document.querySelector(".valid-year")
const dash = document.querySelectorAll(".dash");



const date = new Date();
const CURRENT_YEAR = date.getFullYear();
const CURRENT_MONTH = (date.getMonth() + 1);//CURRENT_MONTH Begin With ZERO
const CURRENT_DAY = (date.getDay() - 2);

const dateNow = new Date();
const birthday = new Date("nov 10, 2020");
let age = dateNow - birthday;
const userDays = parseInt((age / 1000 / 60 / 60 / 24) % 30);
const userMonth = parseInt((age / 1000 / 60 / 60 / 24 / 30) % 12);
const userYear = parseInt((age / 1000 / 60 / 60 / 24 / 365));


console.log(parseInt((age / 1000 / 60 / 60 / 24) % 30) + " days");
console.log(parseInt((age / 1000 / 60 / 60 / 24 / 30) % 12) + " months");
console.log(parseInt((age / 1000 / 60 / 60 / 24 / 365)) + " years");


// console.log(new Date(("sep 15, 98") - new Date()) / 1000 / 60 / 60 / 24 / 365)


inputYear.addEventListener('change', CheckYearInput);
inputMonth.addEventListener('change', CheckMonthInput);
inputDay.addEventListener('change', CheckDayInput);


function CheckYearInput() {
    if (isValidYear(inputYear.value)) {
        if (document.querySelector(".year").classList.contains("err-input")) {
            resetYearInput();
        }
    }

    else {
        showYearErorr();
    }
}



function CheckMonthInput() {
    if (isValidMonth(inputMonth.value)) {
        if (document.querySelector(".month").classList.contains("err-input")) {
            resetMonthInput()
        }
    }
    else {
        showMonthErorr();
    }
}



function CheckDayInput() {
    if (isValidDay(inputDay.value, getDaysOfMonth(parseInt(inputMonth.value)))) {
        if (document.querySelector(".day").classList.contains("err-input")) {
            resetDayInput()
        }
    }
    else {
        showDayErorr();
    }
}

// Check The User Day 
function isValidDay(day, monthDays) {
    if (day > 0 && day <= monthDays) {
        return true;
    }
    else {
        showDayErorr();
    }
}
// Check The User Month
function isValidMonth(month) {
    if (month > 0 && month <= 12) {
        return true;
    }
    else {
        showMonthErorr();
    }
}
// Check The User Year
function isValidYear(year) {
    if (year > 0 && year <= CURRENT_YEAR) {
        console.log("Year Ok");
        return true;
    }
    else {
        showYearErorr();
    }
}

// Get The Number Of Days In Month (If It's 30 || 28 || 31 Days)
function getDaysOfMonth(month) {
    switch (month) {
        case 1: return 31; break;
        case 3: return 31; break;
        case 5: return 31; break;
        case 6: return 31; break;
        case 7: return 31; break;
        case 8: return 31; break;
        case 10: return 31; break;
        case 12: return 31; break;
        case 2: return 28; break;
        case 4: return 30; break;
        case 9: return 30; break;
        case 11: return 30; break;
        default: return 31;
    }
}

// Remove Dash For Put Result
function removeDash() {
    dash.forEach(el => el.classList.remove("dash"));
}

// If Year Input Is Not Valid
function showYearErorr() {
    // Make Title Red (p)
    titlePargraph.forEach(el => el.classList.add("paragraph-red"))
    document.querySelector(".year").classList.add("err-input");
    document.querySelector(".valid-year").classList.add("valid");
}

// If Month Input Is Not Valid
function showMonthErorr() {
    // Make Title Red (p)
    titlePargraph.forEach(el => el.classList.add("paragraph-red"))
    document.querySelector(".month").classList.add("err-input");
    document.querySelector(".valid-month").classList.add("valid");
}

// If Day Input Is Not Valid
function showDayErorr() {
    // Make Title Red (p)
    titlePargraph.forEach(el => el.classList.add("paragraph-red"))
    document.querySelector(".day").classList.add("err-input");
    document.querySelector(".valid-day").classList.add("valid");
}

function hideError() {
    titlePargraph.forEach(el => el.classList.remove("paragraph-red"))
}

function resetYearInput() {
    document.querySelector(".year").classList.remove("err-input")
    document.querySelector(".valid-year").classList.remove("valid")
    hideError();
}

function resetMonthInput() {
    document.querySelector(".month").classList.remove("err-input")
    document.querySelector(".valid-month").classList.remove("valid")
    hideError();
}

function resetDayInput() {
    document.querySelector(".day").classList.remove("err-input")
    document.querySelector(".valid-day").classList.remove("valid")
    hideError();
}

function getMonthName(month) {
    switch (month) {
        case 1: return "jan"; break;
        case 3: return "fep"; break;
        case 5: return "Mar"; break;
        case 6: return "apr"; break;
        case 11: return "may"; break;
        case 7: return "jun"; break;
        case 8: return "jul"; break;
        case 10: return "aug"; break;
        case 12: return "sep"; break;
        case 2: return "oct"; break;
        case 4: return "nov"; break;
        case 9: return "dec"; break;
    }
}
function isEmpty(i) {
    if (i.value.length === 0) {
        console.log("empty");
    }
}