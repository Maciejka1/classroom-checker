let htmlClock = document.querySelector(".clock")
let htmlLesson = document.querySelector(".lesson")
let htmlNextLesson = document.querySelector(".futureLesson")
let daylist = ["mon","tue","wed","thu","fri","sat", "sun"]

let currentDate = new Date();
let d = currentDate.getDay() - 1 
let h = currentDate.getHours()
let m = currentDate.getMinutes()
let currentDay = daylist[d]
let currentLesson
let lessons = {
    mon: ["bezuzyteczne_z_matmy","zaj_kszt_kreat", "historia", "j.niem", "j.ang", "matematyka", "j.polski", "wf", "fizyka"],
    tue: ["j.niem", "edb", "j.ang", "religia", "wos", "matematyka", "j.polski", "brak", "brak","brak"],
    wed: ["zaj_szt_kreat", "j.polski", "wf", "fizyka", "chemia", "zaj_z_wych", "wos", "brak", "brak","brak"],
    thu: ["matematyka", "j.polski", "j.polski","biologia", "j.ang", "informatyka", "wdż(?)", "zaj_dla_niedorozwinietych", "brak","brak"],
    fri: ["wf", "wf", "religia", "matematyka", "geografia", "chemia", "historia", "brak", "brak","brak"],
    sat: ["brak","brak","brak","brak","brak","brak","brak","brak","brak","brak"],
    sun: ["brak","brak","brak","brak","brak","brak","brak","brak","brak","brak"]
}
let none = "brak"
let lessonDay
let nextLesson
function refreshLessons(){ //change it here
    lessonDay = lessons[currentDay]
    if(h === 7 && m >= 10){
// to change hours of your lessons, change "h" and "m" in function refreshLessons()
        currentLesson = currentDay[0]
    } else if(h === 7 && m >= 55){
        currentLesson = none
    }else if(h === 8 && m >= 0){
        currentLesson = currentDay[1]
    }else if(h === 8 && m >= 50){
        currentLesson = none
    }else if(h === 9 && m >= 35){
        currentLesson = currentDay[2]
    }else if(h === 9 && m >= 45){
        currentLesson = none
    }else if(h === 10 && m >= 30){
        currentLesson = currentDay[3]
    }else if(h === 10 && m >= 40){
        currentLesson = none
    }else if(h === 11 && m >= 25){
        currentLesson = currentDay[4]
    }else if(h === 11 && m >= 45){
        currentLesson = none
    }else if(h === 12 && m >= 30){
        currentLesson = currentDay[5]
    }else if(h === 12 && m >= 45){
        currentLesson = none
    }else if(h === 13 && m >= 30){
        currentLesson = currentDay[6]
    }else if(h === 13 && m >= 35){
        currentLesson = none
    }else if(h === 14 && m >= 20){
        currentLesson = currentDay[7]
    }else if(h === 14 && m >= 25){
        currentLesson = none
    }else if(h === 15 && m >= 10){
        currentLesson = currentDay[8]
    }else{
        currentLesson = none
        currentDay = daylist[d+1]
        lessonDay = lessons[currentDay]
        nextLesson = lessonDay[0]
        console.log(nextLesson)
    }
//DONT TOUCH, IT WORKS
}
function getTime(){
    currentDate = new Date();
    h = currentDate.getHours()
    m = currentDate.getMinutes()
    if(m <= 9){m = 0 + "" + m}
    let currentTime = h + ":" + m 
    refreshLessons()
    htmlClock.innerHTML = currentTime
    htmlLesson.innerHTML = "Lekcja teraz: " + currentLesson
    htmlNextLesson.innerHTML ="Następna lekcja: " + nextLesson
    
    setTimeout("getTime()",10000)
}

getTime()
refreshLessons()