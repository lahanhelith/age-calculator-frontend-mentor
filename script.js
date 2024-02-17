const dayInput = document.getElementById("day-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const form = document.getElementById("form");
const yearText = document.getElementById("years");
const monthText = document.getElementById("months");
const dayText = document.getElementById("days");
const dayError = document.getElementById("day-error");
const monthError = document.getElementById("month-error");
const yearError = document.getElementById("year-error");
const monthLabel = document.getElementById("month-label");
const dayLabel = document.getElementById("day-label");
const yearLabel = document.getElementById("year-label");

let ageTexts = document.querySelectorAll(".age");
let interval = 3000;

function getDaysInMonth (year, month){
    return new Date(year, month, 0).getDate();
}

const isDateFuture = (currentDate) => {
    const inputDate = new Date(yearInput.value, monthInput.value, dayInput.value);
    if(inputDate > currentDate){
        return true;
    }else{
        return false;
    }
}

const dateValidation = (date) => {
    let isDayValid = true;
    let isMonthValid = true;
    let isYearValid = true;

    if(!dayInput.value){
        dayError.innerText = "Field is required";
        dayLabel.classList.add("error");
        dayInput.classList.add("input-error");
        isDayValid = false;
    }
    if(dayInput.value > 31 || dayInput.value < 1 && dayInput.value){
        dayError.innerText = "Must be a valid Day";
        dayLabel.classList.add("error");
        dayInput.classList.add("input-error");
        isDayValid = false;
    }
    if(dayInput.value > getDaysInMonth(yearInput.value, monthInput.value) && dayInput.value <= 31){
        monthError.innerText = "";
        yearError.innerText = "";
        isDayValid = false;
        dayInput.classList.add("input-error");
        monthInput.classList.add("input-error");
        yearInput.classList.add("input-error");
        dayError.innerText = "Invalid Date";
        dayLabel.classList.add("error");
        monthLabel.classList.add("error");
        yearLabel.classList.add("error");
    }
    console.log(isDayValid);

    if(!monthInput.value){
        monthError.innerText = "Field is required";
        monthInput.classList.add("input-error");
        monthLabel.classList.add("error");
        isMonthValid = false;
    }
    if(monthInput.value > 12 || monthInput.value < 1 && monthInput.value){
        monthError.innerText = "Must be a valid month";
        monthInput.classList.add("input-error");
        monthLabel.classList.add("error");
        isMonthValid = false;
    }
    console.log(isMonthValid);

    
    if(!yearInput.value){
        yearError.innerText = "Field is required";
        yearInput.classList.add("input-error");
        yearLabel.classList.add("error");
        isYearValid = false;
    }
    console.log(isYearValid);

    if(isDayValid && isMonthValid && isYearValid){
        return true;
    }else{
        return false;
    }
}

const clearErrors = () => {
    dayError.innerText = "";
    monthError.innerText = "";
    yearError.innerText = "";
    dayLabel.classList.remove("error");
    monthLabel.classList.remove("error");
    yearLabel.classList.remove("error");
    dayInput.classList.remove("input-error");
    monthInput.classList.remove("input-error");
    yearInput.classList.remove("input-error");
    
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    const currentDate = new Date();
    if(dateValidation(currentDate)){
        if(isDateFuture(currentDate)){
            yearInput.classList.add("input-error");
            return;   
        }
        clearErrors();
        const birthDate = new Date(yearInput.value, monthInput.value, dayInput.value);

        let birthDateDay = birthDate.getDate();
        let birthDateMonth = birthDate.getMonth() + 1;
        let birthDateYear = birthDate.getFullYear();

        let currentDateDay = currentDate.getDate();
        let currentDateMonth = currentDate.getMonth() + 1;
        let currentDateYear = currentDate.getFullYear();
        
        let ageDay;
        let ageMonth;
        let ageYear;

        ageYear = currentDateYear - birthDateYear;

        if(currentDateMonth >= birthDateMonth){
            ageMonth = currentDateMonth - birthDateMonth;
        }else{
            ageYear--;
            ageMonth = 12 + currentDateMonth - birthDateMonth;
        }

        if(currentDateDay >= birthDateDay){
            ageDay = currentDateDay - birthDateDay;
        }else{
            ageMonth--;
            ageDay = getDaysInMonth(birthDateYear, birthDateMonth) + currentDateDay - birthDateDay;
        }
        dayText.setAttribute("data-val", ageDay);
        monthText.setAttribute("data-val", ageMonth);
        yearText.setAttribute("data-val", ageYear);
        dayText.innerText = 0;
        monthText.innerText = 0;
        yearText.innerText = 0;

        ageTexts.forEach((valueDisplay) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            let duration = Math.floor(interval / endValue);
            if (startValue == endValue) {
                clearInterval(counter);
                return;
              }
            let counter = setInterval(function () {
               startValue += 1;
               valueDisplay.textContent = startValue;
               if (startValue == endValue) {
                 clearInterval(counter);
               }
             }, duration);
           });
    }
})