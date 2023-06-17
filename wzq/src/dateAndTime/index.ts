interface dateFormat {
    getDateFormat: "yyyy-MM-dd" | "yyyy/MM/dd"
    getTimeFormat: "HH:mm:ss" | "HH/mm/ss"
}

// 生成随机日期
function randomDate() {
    var startDate = new Date(2012, 0, 1).getTime();
    var endDate = new Date(2015, 0, 1).getTime();
    var spaces = (endDate - startDate);
    var timestamp = Math.round(Math.random() * spaces);
    timestamp += startDate;
    return new Date(timestamp);
}

function formatDate(date: Date, format: dateFormat['getDateFormat']) {
    let month: string | number = randomDate().getMonth();
    let day: string | number = randomDate().getDate();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    if (format === 'yyyy-MM-dd') {
        return String(date.getFullYear()) + '-' + month + '-' + day;
    }
    return String(date.getFullYear()) + '/' + month + '/' + day;
}

export function getformatDate (format:dateFormat['getDateFormat']) {
    return formatDate(randomDate(), format)
}

export function randomTime(format: dateFormat['getTimeFormat']) {
    const hourRandom = Math.round(Math.random() * 24)
    const minutesRandom = Math.round(Math.random() * 60)
    const secondsRandom = Math.round(Math.random() * 60)
    let hour: string | number = hourRandom < 10 ? '0' + hourRandom : '' + hourRandom;
    let minutes: string | number = minutesRandom < 10 ? '0' + minutesRandom : '' + minutesRandom;
    let seconds: string | number = secondsRandom < 10 ? '0' + secondsRandom : '' + secondsRandom;
    if (format === 'HH:mm:ss') {
        return `${hour}:${minutes}:${seconds}`
    }
    return `${hour}/${minutes}/${seconds}`
}


