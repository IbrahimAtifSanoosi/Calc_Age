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
const btn = document.querySelector(".button");

// For Keep Checking Current 
const CURRENT_YEAR = new Date().getFullYear();



btn.addEventListener('click', function () {
    CheckYearInput(inputYear.value);
    CheckMonthInput(inputMonth.value);
    CheckDayInput(inputDay.value, getDaysOfMonth(parseInt(inputMonth.value)));
    if (isValidYear(inputYear.value) && isValidMonth(inputMonth.value) && isValidDay(inputDay.value, getDaysOfMonth(parseInt(inputMonth.value)))) {
        computeAge(inputYear.value, inputMonth.value, inputDay.value);
    }
});

function CheckYearInput(year) {
    if (isValidYear(year)) {
        if (document.querySelector(".year").classList.contains("err-input")) {
            resetYearInput();
        }
    }

    else {
        showYearErorr();
    }
}

function CheckMonthInput(month) {
    if (isValidMonth(inputMonth.value)) {
        if (document.querySelector(".month").classList.contains("err-input")) {
            resetMonthInput()
        }
    }
    else {
        showMonthErorr();
    }
}

function CheckDayInput(day, monthDays) {
    if (isValidDay(day, monthDays)) {
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

function isEmpty(i) {
    if (i.value.length === 0) {
        console.log("empty");
    }
}

function computeAge(year, month, day) {
    removeDash();
    const dateNow = new Date();
    let _y = year.toString();
    let _m = month.toString();
    let _d = day.toString();
    let inputDate = [_y, _m, _d].join(' ')
    const birthday = new Date(inputDate);
    console.log(birthday);
    let age = dateNow - birthday;
    dayResult.value = parseInt((age / 1000 / 60 / 60 / 24) % 30);
    monthResult.value = parseInt((age / 1000 / 60 / 60 / 24 / 30) % 12);
    yearResult.value = parseInt((age / 1000 / 60 / 60 / 24 / 365));
}