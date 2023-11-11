export function dateParser(date) {
    const newDate = new Date(date)

    return `${newDate.getMonth()}-${newDate.getDate()}-${newDate.getFullYear()}`
}


export function dateIsoParser(date) {

    return new Date(date).toISOString()
}