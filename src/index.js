module.exports = function toReadable(number) {
    let a = ['ten', ]
    let num = String(number)
    let result = ''
    if (num.length == 1)
        return getLen1(num)
    else if (num.length == 2)
        return getLen2(num)
    else if (num.length == 3) {
        return getLen3(num)
    }
}

function getLen1(num) {
    if (num == '0') return 'zero'
    if (num == '1') return 'one'
    if (num == '2') return 'two'
    if (num == '3') return 'three'
    if (num == '4') return 'four'
    if (num == '5') return 'five'
    if (num == '6') return 'six'
    if (num == '7') return 'seven'
    if (num == '8') return 'eight'
    if (num == '9') return 'nine'
}

function getLen2(num) {
    if (num == '00') return 'zero'
    if (num == '10') return 'ten'
    if (num == '11') return 'eleven'
    if (num == '12') return 'twelve'
    if (num == '13') return 'thirteen'
    if (num == '14') return 'fourteen'
    if (num == '15') return 'fifteen'
    if (num == '16') return 'sixteen'
    if (num == '17') return 'seventeen'
    if (num == '18') return 'eighteen'
    if (num == '19') return 'nineteen'
    if (num == '20') return 'twenty'
    if (num == '30') return 'thirty'
    if (num == '40') return 'forty'
    if (num == '50') return 'fifty'
    if (num == '60') return 'sixty'
    if (num == '70') return 'seventy'
    if (num == '80') return 'eighty'
    if (num == '90') return 'ninety'
    if (Number(num) > 20 && Number(num) < 30)
        return `twenty ${getLen1(num[1])}`
    if (Number(num) > 30 && Number(num) < 40)
        return `thirty ${getLen1(num[1])}`
    if (Number(num) > 40 && Number(num) < 50)
        return `forty ${getLen1(num[1])}`
    if (Number(num) > 50 && Number(num) < 60)
        return `fifty ${getLen1(num[1])}`
    if (Number(num) > 60 && Number(num) < 70)
        return `sixty ${getLen1(num[1])}`
    if (Number(num) > 70 && Number(num) < 80)
        return `seventy ${getLen1(num[1])}`
    if (Number(num) > 80 && Number(num) < 90)
        return `eighty ${getLen1(num[1])}`
    if (Number(num) > 90 && Number(num) < 100)
        return `ninety ${getLen1(num[1])}`
    if (num[0] == '0')
        return getLen1(num[1])
}

function getLen3(num) {
    let result = ''
    let temp = num[1] + num[2]
    result += getLen1(num[0]) + ' hundred'
    if (temp == '00')
        return result
    result += ` ${getLen2(temp)}`
    return result
}
