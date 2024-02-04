
export default interface Time{
    hour: number,
    minute: number
}

const holidays: Date[] = [
    new Date(2024, 0, 1),
    new Date(2024, 2, 15),
    new Date(2024, 2, 29),
    new Date(2024, 3, 1),
    new Date(2024, 4, 1),
    new Date(2024, 4, 20),
    new Date(2024, 7, 20),
    new Date(2024, 9, 23),
    new Date(2024, 10, 1),
    new Date(2024, 11, 25),
    new Date(2024, 11, 26),
]

export function formatTime(time: Time){
    const hour = time.hour > 9 ? time.hour.toString() : `0${time.hour}`
    const minute = time.minute > 9 ? time.minute.toString() : `0${time.minute}`

    return `${hour} : ${minute}`
}

export function isTimeBigger(time: Time, date: Date){
    if(time.hour > date.getHours()){
        return true
    }

    if(time.hour === date.getHours()){
        if(time.minute > date.getMinutes()){
            return true
        }
    }

    return false
}

export function timeComparer(a: Time, b: Time){
    if(a.hour > b.hour){
        return true
    }

    if(a.hour === b.hour){
        if(a.minute > b.minute){
            return true
        }
    }

    return false
}

export function isHoliday(date: Date){
    return holidays.some(x => x.toDateString() === date.toDateString())
}

export function isSunday(date: Date){
    return date.getDay() === 0
}
