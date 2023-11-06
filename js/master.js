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
    resetField(yearErrorP, inputYear);
    resetField(monthErrorP, inputMonth);
    resetField(dayErrorP, inputDay);

    let yearValidation = isValidYear(inputYear.value);
    let monthValidation = isValidMonth(inputMonth.value);
    let dayValidation = isValidDay(inputDay.value, getDaysOfMonth(parseInt(inputMonth.value), parseInt(inputYear.value)));

    if (!yearValidation.isSuccess) {
        showErorr(inputYear, yearErrorP, yearValidation.error);
    }

    if (!monthValidation.isSuccess) {
        showErorr(inputMonth, monthErrorP, monthValidation.error);
    }

    if (!dayValidation.isSuccess) {
        showErorr(inputDay, dayErrorP, dayValidation.error);
    }

    if (yearValidation.isSuccess && monthValidation.isSuccess && dayValidation.isSuccess) {
        computeAge(inputYear.value, inputMonth.value, inputDay.value);
    }
});
// Check The User Day 
function isValidDay(day, monthDays) {
    if (isEmpty(day)) {
        return { isSuccess: false, error: "Field is required" };
    }
    if (day > monthDays) {
        return { isSuccess: false, error: "Must be valid day" };
    }
    else {
        return { isSuccess: true }
    }
}
// Check The User Month
function isValidMonth(month) {
    if (isEmpty(month)) {
        return { isSuccess: false, error: "Field is required" };
    }
    if (month < 0) {
        return { isSuccess: false, error: "Must be greater than 0" };
    }

    if (month > 12) {
        return { isSuccess: false, error: "Must be valid month" };
    }
    else {
        return { isSuccess: true }
    }
}
// Check The User Year
function isValidYear(year) {
    if (isEmpty(year)) {
        return { isSuccess: false, error: "Field is required" };
    }

    if (year < 0) {
        return { isSuccess: false, error: "Must be greater than 0" };
    }

    if (year > CURRENT_YEAR) {
        return { isSuccess: false, error: "Must be in the past" };
    }
    else {
        return { isSuccess: true }
    }
}

// Get The Number Of Days In Month (If It's 30 || 28 || 31 Days)
function getDaysOfMonth(month, year) {
    switch (month) {
        case 1: case 3: case 5: case 6: case 7: case 8: case 10: case 12:
            return 31;
            break;
        case 2:
            return getFebruaryDays(year);
            break;
        case 4: case 9: case 11:
            return 30;
            break;
    }
}

function getFebruaryDays(year) {
    if (year % 4 == 0 && year % 100 == 0) {
        return 29;
    }
    else {
        return 28;
    }
}

// Remove Dash For Put Result
function removeDash() {
    dash.forEach(el => el.classList.remove("dash"));
}

// If Year Input Is Not Valid
function showErorr(input, paragraph, error) {
    titlePargraph.forEach(el => el.classList.add("paragraph-red"))
    input.classList.add("err-input");
    paragraph.innerText = error;
}

function resetField(paragraph, field) {
    paragraph.innerText = "";
    field.classList.remove("err-input");
    hideError();
}

function hideError() {
    titlePargraph.forEach(el => el.classList.remove("paragraph-red"))
}

function isEmpty(input) {
    if (input.length === 0) {
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