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


inputYear.addEventListener('change', calculateYearRsult);
inputMonth.addEventListener('change', calculateMonthRsult);
inputDay.addEventListener('change', calculateDayRsult);


function calculateYearRsult() {
    if (isValidYear(inputYear.value)) {
        if (document.querySelector(".year").classList.contains("err-input")) {
            resetYearInput()
        }
        removeDash();
        yearResult.value = computeYear(inputYear.value, CURRENT_YEAR, inputMonth.value, CURRENT_MONTH);
    }
}

function computeYear(year, currentYear, month, currentMonth) {
    if (month < currentMonth) {
        return currentYear - year;
    }

    else {
        return currentYear - year - 1;
    }
}

function calculateMonthRsult() {
    if (isValidMonth(inputMonth.value)) {
        if (document.querySelector(".month").classList.contains("err-input")) {
            resetMonthInput()
        }
        removeDash();
        monthResult.value = computeMonth(inputMonth.value, CURRENT_MONTH);
    }

    else {
        showMonthErorr();
    }
}

function computeMonth(month, currentMonth) {
    if (month <= currentMonth) {
        return (currentMonth - month);
    }

    else {
        return month - currentMonth;
    }
}

function calculateDayRsult() {
    if (isValidDay(inputDay.value, getDaysOfMonth(parseInt(inputMonth.value)))) {
        if (document.querySelector(".day").classList.contains("err-input")) {
            resetDayInput()
        }
        removeDash();
        dayResult.value = computeDay(inputDay.value, CURRENT_DAY);
    }

    else {
        showDayErorr();
    }
}

function computeDay(day, currentDay) {
    if (day <= currentDay) {
        console.log(day);
        return 30 - (currentDay - day);
    }

    else {
        return day - currentDay;
    }
}


// Check The User Day 
function isValidDay(day, monthDays) {
    console.log(monthDays);
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