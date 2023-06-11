function getMaxNum(val: string) {
    const num:string = val[9]
    return Math.floor(Math.random() * parseInt(num))
}

function getRangeNum(val: string) {
    const firstNum:string =  val[9]
    const lastNum:string = val[12]
    return parseInt(firstNum) +  Math.floor(Math.random() * (parseInt(lastNum) - parseInt(firstNum)))
}

export function getNum(val: string) {
    if (/@integer/.test(val)) {
        if (/@integer\(\)/.test(val)) {
            return Math.floor(Math.random() * 10000)
        } else if (/@integer\(\d\)/.test(val)) {
            return getMaxNum(val)
        } else if (/@integer\(\d, \d\)/.test(val)) {
            return getRangeNum(val)
        } else {
            console.error('传入的参数有错') 
        }
    } else {
        console.error('传入的参数有错')
    }
}