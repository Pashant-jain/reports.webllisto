
let calendar = document.querySelector('.calendar')

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    
    if (month > 11 || month < 0) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // get first day of month
    
    let first_day = new Date(year, month, 1)
    
// calendar holiday
    let holiday_day = 1 //{{ h_days|safe }}
    let holiday_month = 1 // {{ h_month|safe }}
    
    // calendar leave
    let l_day = 1 // {{ l_days|safe }}
    let l_month = 1 // {{ l_month|safe }}

    // timesheet fill
    let timesheet_fill_day = 1 // {{ timesheet_fill_day|safe }}
    let timesheet_fill_month = 1 // {{ timesheet_fill_mon|safe }}

    // timesheet missing
    let timesheet_miss_day = 2 // {{ timesheet_miss_day|safe }}
    let timesheet_miss_month = 1// {{ timesheet_miss_mon|safe }}


    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
            
            console.log("fhhfh")

            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }

            // timesheet_fill
            if (i - first_day.getDay() + 1 === timesheet_fill_day[0] && year === currDate.getFullYear() && month === timesheet_fill_month[0]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[1] && year === currDate.getFullYear() && month === timesheet_fill_month[1]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[2] && year === currDate.getFullYear() && month === timesheet_fill_month[2]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[3] && year === currDate.getFullYear() && month === timesheet_fill_month[3]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[4] && year === currDate.getFullYear() && month === timesheet_fill_month[4]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[5] && year === currDate.getFullYear() && month === timesheet_fill_month[5]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[6] && year === currDate.getFullYear() && month === timesheet_fill_month[6]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[7] && year === currDate.getFullYear() && month === timesheet_fill_month[7]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[8] && year === currDate.getFullYear() && month === timesheet_fill_month[8]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[9] && year === currDate.getFullYear() && month === timesheet_fill_month[9]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[10] && year === currDate.getFullYear() && month === timesheet_fill_month[10]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[11] && year === currDate.getFullYear() && month === timesheet_fill_month[11]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[12] && year === currDate.getFullYear() && month === timesheet_fill_month[12]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[13] && year === currDate.getFullYear() && month === timesheet_fill_month[13]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[14] && year === currDate.getFullYear() && month === timesheet_fill_month[14]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[15] && year === currDate.getFullYear() && month === timesheet_fill_month[15]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[16] && year === currDate.getFullYear() && month === timesheet_fill_month[16]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[17] && year === currDate.getFullYear() && month === timesheet_fill_month[17]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[18] && year === currDate.getFullYear() && month === timesheet_fill_month[18]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[19] && year === currDate.getFullYear() && month === timesheet_fill_month[19]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[20] && year === currDate.getFullYear() && month === timesheet_fill_month[20]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[21] && year === currDate.getFullYear() && month === timesheet_fill_month[21]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[22] && year === currDate.getFullYear() && month === timesheet_fill_month[22]) {
                day.classList.add('timesheet_fill-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_fill_day[23] && year === currDate.getFullYear() && month === timesheet_fill_month[23]) {
                day.classList.add('timesheet_fill-date')
            }

        
            // leave date 
            
            if (i - first_day.getDay() + 1 === l_day[0] && year === currDate.getFullYear() && month === l_month[0]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[1] && year === currDate.getFullYear() && month === l_month[1]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[2] && year === currDate.getFullYear() && month === l_month[2]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[3] && year === currDate.getFullYear() && month === l_month[3]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[4] && year === currDate.getFullYear() && month === l_month[4]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[5] && year === currDate.getFullYear() && month === l_month[5]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[6] && year === currDate.getFullYear() && month === l_month[6]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[7] && year === currDate.getFullYear() && month === l_month[7]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[8] && year === currDate.getFullYear() && month === l_month[8]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[9] && year === currDate.getFullYear() && month === l_month[9]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[10] && year === currDate.getFullYear() && month === l_month[10]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[11] && year === currDate.getFullYear() && month === l_month[11]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[12] && year === currDate.getFullYear() && month === l_month[12]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[13] && year === currDate.getFullYear() && month === l_month[13]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[14] && year === currDate.getFullYear() && month === l_month[14]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[15] && year === currDate.getFullYear() && month === l_month[15]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[16] && year === currDate.getFullYear() && month === l_month[16]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[17] && year === currDate.getFullYear() && month === l_month[17]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[18] && year === currDate.getFullYear() && month === l_month[18]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[19] && year === currDate.getFullYear() && month === l_month[19]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[20] && year === currDate.getFullYear() && month === l_month[20]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[21] && year === currDate.getFullYear() && month === l_month[21]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[22] && year === currDate.getFullYear() && month === l_month[22]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[23] && year === currDate.getFullYear() && month === l_month[23]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[23] && year === currDate.getFullYear() && month === l_month[23]) {
                day.classList.add('leave-date')
            }
            if (i - first_day.getDay() + 1 === l_day[24] && year === currDate.getFullYear() && month === l_month[24]) {
                day.classList.add('leave-date')
            }
           


            // timesheet_miss
            if (i - first_day.getDay() + 1 === timesheet_miss_day[0] && year === currDate.getFullYear() && month === timesheet_miss_month[0]) {
                day.classList.add('timesheet_miss-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_miss_day[1] && year === currDate.getFullYear() && month === timesheet_miss_month[1]) {
                day.classList.add('timesheet_miss-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_miss_day[2] && year === currDate.getFullYear() && month === timesheet_miss_month[2]) {
                day.classList.add('timesheet_miss-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_miss_day[3] && year === currDate.getFullYear() && month === timesheet_miss_month[3]) {
                day.classList.add('timesheet_miss-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_miss_day[4] && year === currDate.getFullYear() && month === timesheet_miss_month[4]) {
                day.classList.add('timesheet_miss-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_miss_day[5] && year === currDate.getFullYear() && month === timesheet_miss_month[5]) {
                day.classList.add('timesheet_miss-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_miss_day[6] && year === currDate.getFullYear() && month === timesheet_miss_month[6]) {
                day.classList.add('timesheet_miss-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_miss_day[7] && year === currDate.getFullYear() && month === timesheet_miss_month[7]) {
                day.classList.add('timesheet_miss-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_miss_day[8] && year === currDate.getFullYear() && month === timesheet_miss_month[8]) {
                day.classList.add('timesheet_miss-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_miss_day[9] && year === currDate.getFullYear() && month === timesheet_miss_month[9]) {
                day.classList.add('timesheet_miss-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_miss_day[10] && year === currDate.getFullYear() && month === timesheet_miss_month[10]) {
                day.classList.add('timesheet_miss-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_miss_day[11] && year === currDate.getFullYear() && month === timesheet_miss_month[11]) {
                day.classList.add('timesheet_miss-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_miss_day[12] && year === currDate.getFullYear() && month === timesheet_miss_month[12]) {
                day.classList.add('timesheet_miss-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_miss_day[13] && year === currDate.getFullYear() && month === timesheet_miss_month[13]) {
                day.classList.add('timesheet_miss-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_miss_day[14] && year === currDate.getFullYear() && month === timesheet_miss_month[14]) {
                day.classList.add('timesheet_miss-date')
            }
            if (i - first_day.getDay() + 1 === timesheet_miss_day[15] && year === currDate.getFullYear() && month === timesheet_miss_month[15]) {
                day.classList.add('timesheet_miss-date')
            }
            

            
            // holiday conditions

            if (i - first_day.getDay() + 1 === holiday_day[0] && year === currDate.getFullYear() && month === holiday_month[0]) {
                day.classList.add('holiday-date')
            }
            if (i - first_day.getDay() + 1 === holiday_day[1] && year === currDate.getFullYear() && month === holiday_month[1]) {
                day.classList.add('holiday-date')
            }
            if (i - first_day.getDay() + 1 === holiday_day[2] && year === currDate.getFullYear() && month === holiday_month[2]) {
                day.classList.add('holiday-date')
            }
            if (i - first_day.getDay() + 1 === holiday_day[3] && year === currDate.getFullYear() && month === holiday_month[3]) {
                day.classList.add('holiday-date')
            }
            if (i - first_day.getDay() + 1 === holiday_day[4] && year === currDate.getFullYear() && month === holiday_month[4]) {
                day.classList.add('holiday-date')
            }
            if (i - first_day.getDay() + 1 === holiday_day[5] && year === currDate.getFullYear() && month === holiday_month[5]) {
                day.classList.add('holiday-date')
            }
            if (i - first_day.getDay() + 1 === holiday_day[6] && year === currDate.getFullYear() && month === holiday_month[6]) {
                day.classList.add('holiday-date')
            }
            if (i - first_day.getDay() + 1 === holiday_day[7] && year === currDate.getFullYear() && month === holiday_month[7]) {
                day.classList.add('holiday-date')
            }
            if (i - first_day.getDay() + 1 === holiday_day[8] && year === currDate.getFullYear() && month === holiday_month[8]) {
                day.classList.add('holiday-date')
            }
            if (i - first_day.getDay() + 1 === holiday_day[9] && year === currDate.getFullYear() && month === holiday_month[9]) {
                day.classList.add('holiday-date')
            }
            if (i - first_day.getDay() + 1 === holiday_day[10] && year === currDate.getFullYear() && month === holiday_month[10]) {
                day.classList.add('holiday-date')
            }
            if (i - first_day.getDay() + 1 === holiday_day[11] && year === currDate.getFullYear() && month === holiday_month[11]) {
                day.classList.add('holiday-date')
            }
            if (i - first_day.getDay() + 1 === holiday_day[12] && year === currDate.getFullYear() && month === holiday_month[12]) {
                day.classList.add('holiday-date')
            }
            if (i - first_day.getDay() + 1 === holiday_day[13] && year === currDate.getFullYear() && month === holiday_month[13]) {
                day.classList.add('holiday-date')
            }
            if (i - first_day.getDay() + 1 === holiday_day[14] && year === currDate.getFullYear() && month === holiday_month[14]) {
                day.classList.add('holiday-date')
            }
            if (i - first_day.getDay() + 1 === holiday_day[15] && year === currDate.getFullYear() && month === holiday_month[15]) {
                day.classList.add('holiday-date')
            }
            if (i - first_day.getDay() + 1 === holiday_day[16] && year === currDate.getFullYear() && month === holiday_month[16]) {
                day.classList.add('holiday-date')
            }
            if (i - first_day.getDay() + 1 === holiday_day[17] && year === currDate.getFullYear() && month === holiday_month[17]) {
                day.classList.add('holiday-date')
            }
            if (i - first_day.getDay() + 1 === holiday_day[18] && year === currDate.getFullYear() && month === holiday_month[18]) {
                day.classList.add('holiday-date')
            }
            if (i - first_day.getDay() + 1 === holiday_day[19] && year === currDate.getFullYear() && month === holiday_month[19]) {
                day.classList.add('holiday-date')
            }
            if (i - first_day.getDay() + 1 === holiday_day[20] && year === currDate.getFullYear() && month === holiday_month[20]) {
                day.classList.add('holiday-date')
            }
        }
        calendar_days.appendChild(day)
    }
     
    console.log("d_name", first_day.getDay())
    console.log("d", currDate.getDate()) 
    console.log("m",month)
    console.log("y",currDate.getFullYear())
}

let month_list = calendar.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalendar(index, curr_year.value)
    }
    month_list.appendChild(month)
})

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = () => {
    month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

