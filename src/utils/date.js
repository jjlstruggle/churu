import dayjs from 'dayjs'
let $ = dayjs()

let curY= $.year()
let curM = $.month()
let curD = $.date()
let lastM = curM === 0 ? 11 : curM - 1
let nextM = curM === 11 ? 0 : curM + 1

const format = (year,month) => year + "-" + (month+1) + "-01"


let $last = {
    m:lastM + 1,
    d:dayjs(format(lastM === 11 ? curY-1 : curY,lastM)).daysInMonth()
}
let $next = {
    m:nextM + 1,
    d:dayjs(format(nextM === 0 ? curY + 1 : curY,nextM)).daysInMonth()
}
let $cur = {
    m:curM + 1,
    d:$.daysInMonth()
}

let list = [[],[],[]]
if(curD<14){
    let i = 0;
    for(let j = $last.d; i < 14 - curD ; i++,j--){
        list[0].unshift(`${$last.m}-${j}日`)
    }
    for(let j = 1; j <= $cur.d; j++){
        list[0].push(`${$cur.m}-${j}日`)
    }
    for(let j = 1; j < $next.d; j++){
        list[0].push(`${$next.m}-${j}日`)
    }
}else{
    for(let i = curD; i > curD - 14 ; i--){
        list[0].unshift(`${$cur.m}-${i}日`)
    }
    for(let j = curD+1; j <= $cur.d; j++){
        list[0].push(`${$cur.m}-${j}日`)
    }
    for(let j = 1; j < $next.d; j++){
        list[0].push(`${$next.m}-${j}日`)
    }
}

for(let i = 0 ; i < 23; i++){
    list[1].push(`${i}时`)
}

for(let i = 0 ; i < 59; i++){
    list[2].push(`${i}分`)
}

export default {
    list,
    curDate: (curM+1) + "-" + curD + "日"
}