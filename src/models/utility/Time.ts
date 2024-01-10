export default interface Time{
    hour: number,
    minute: number
}

export function formatTime(time: Time){
    const hour = time.hour > 9 ? time.hour.toString() : `0${time.hour}`
    const minute = time.minute > 9 ? time.minute.toString() : `0${time.minute}`

    return `${hour} : ${minute}`
}
