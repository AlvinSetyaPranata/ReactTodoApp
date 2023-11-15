export function dateParser(date) {
    const newDate = new Date(date)

    return `${newDate.getMonth()}-${newDate.getDate()}-${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}`
}


export function dateIsoParser(date) {

    return new Date(date).toISOString()
}

export function datePack(date) {
    const newDate = new Date(date)

    return `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}`
}