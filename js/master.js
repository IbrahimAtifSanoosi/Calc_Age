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
// console.log(isYearEmpty(inputYear));
function CheckYearInput(year) {
    if (isValidYear(year)) {
        resetYearInput();
    }
    else {
        showYearErorr();
    }
}

function CheckMonthInput(month) {
    if (isValidMonth(inputMonth.value)) {
        resetMonthInput()
    }
    else {
        showMonthErorr();
    }
}

function CheckDayInput(day, monthDays) {
    if (isValidDay(day, monthDays)) {
        resetDayInput();
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
    titlePargraph.forEach(el => el.classList.add("paragraph-red"))
    document.querySelector(".year").classList.add("err-input");
    if (isEmpty(inputYear)) {
        document.querySelector(".valid-year").innerText = "This field is required";
    }
    else {
        document.querySelector(".valid-year").innerText = "Must be in the past";
    }
}

// If Month Input Is Not Valid
function showMonthErorr() {
    titlePargraph.forEach(el => el.classList.add("paragraph-red"))
    document.querySelector(".month").classList.add("err-input");
    if (isEmpty(inputMonth)) {
        document.querySelector(".valid-month").innerText = "This field is required";
    }
    else {
        document.querySelector(".valid-month").innerText = "Must be valid month";
    }
}

// If Day Input Is Not Valid
function showDayErorr() {
    titlePargraph.forEach(el => el.classList.add("paragraph-red"))
    document.querySelector(".day").classList.add("err-input");
    if (isEmpty(inputDay)) {
        document.querySelector(".valid-day").innerText = "This field is required";
    }
    else {
        document.querySelector(".valid-day").innerText = "Must be valid day";

    }
}

function resetYearInput() {
    document.querySelector(".valid-year").innerText = "";
    document.querySelector(".year").classList.remove("err-input");
    hideError();
}

function resetMonthInput() {
    document.querySelector(".valid-month").innerText = "";
    document.querySelector(".month").classList.remove("err-input");
    hideError();
}

function resetDayInput() {
    document.querySelector(".valid-day").innerText = "";
    document.querySelector(".day").classList.remove("err-input");
    hideError();
}

function hideError() {
    titlePargraph.forEach(el => el.classList.remove("paragraph-red"))
}

function isEmpty(input) {
    if (input.value.length === 0) {
        return true;
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
    dayResult.value = parseInt((age / (1000 * 60 * 60 * 24)) % 30.4);
    monthResult.value = parseInt((age / (1000 * 60 * 60 * 24 * 30)) % 12);
    yearResult.value = parseInt((age / (365 * 24 * 60 * 60 * 1000)));
}