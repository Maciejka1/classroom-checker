let htmlClock = document.querySelector(".clock")
let htmlLesson = document.querySelector(".lesson")
let htmlNextLesson = document.querySelector(".futureLesson")
let htmlAllLessons = document.querySelector(".allLessons")
let daylist = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

let currentDate = new Date();
let d = currentDate.getDay()
let h = 7 //currentDate.getHours()
let m = 20 //currentDate.getMinutes()
let currentDay = daylist[d] 
let currentLesson
let lessons = {
    Mon: ["bezuzyteczne_z_matmy","zaj_kszt_kreat", "historia", "j.niem", "j.ang", "matematyka", "j.polski", "wf", "fizyka"],
    Tue: ["j.niem", "edb", "j.ang", "religia", "wos", "matematyka", "j.polski"],
    Wed: ["zaj_szt_kreat", "j.polski", "wf", "fizyka", "chemia", "zaj_z_wych", "wos"],
    Thu: ["matematyka", "j.polski", "j.polski","biologia", "j.ang", "informatyka", "brak", "zaj_dla_niedorozwinietych"],
    Fri: ["wf", "wf", "religia", "matematyka", "geografia", "chemia", "historia"],
    Sat: ["brak lekcji"],
    Sun: ["brak lekcji"]
}
let none = "brak"
let lessonDay
let nextLesson
function refreshLessons(){
    lessonDay = lessons[currentDay]
    if(h <= 7 && m < 10 ){
        currentLesson = none
        nextLesson = lessonDay[0]
    }else if(h===7 && m>=10 && m<=55){
        currentLesson = lessonDay[0]
        nextLesson = lessonDay[1]
    }else if(h===8 && m>=0 && m<=45){
        currentLesson = lessonDay[1]
        nextLesson = lessonDay[2]
    }else if(h===8 && m>=50){
        currentLesson = lessonDay[2]
        nextLesson = lessonDay[3]
    }else if(h===9 && m<=35){
        currentLesson = lessonDay[2]
        nextLesson = lessonDay[3]
    }else if(h===9 && m>=45){
        currentLesson = lessonDay[3]
        nextLesson = lessonDay[4]
    }else if(h===10 && m<=30){
        currentLesson = lessonDay[3]
        nextLesson = lessonDay[4]
    }else if(h===10 && m>=40){
        currentLesson = lessonDay[4]
        if(lessonDay[5]===undefined){
            nextLesson = none
        }else{
            nextLesson = lessonDay[5]
        }
    }else if(h===11 && m<=25){
        currentLesson = lessonDay[4]
        if(lessonDay[5]===undefined){
            nextLesson = none
        }else{
            nextLesson = lessonDay[5]
        }
    }else if(h===11 && m>=45){
        if(lessonDay[5]===undefined){
            currentLesson = none
        }else{
            currentLesson = lessonDay[5]
        }
        if(lessonDay[6]===undefined){
            nextLesson = none
        }else{
            nextLesson = lessonDay[6]
        }
    }else if(h===12 && m<=30){
        if(lessonDay[5]===undefined){
            currentLesson = none
        }else{
            currentLesson = lessonDay[5]
        }
        if(lessonDay[6]===undefined){
            nextLesson = none
        }else{
            nextLesson = lessonDay[6]
        }
    }else if(h===12 && m>=45){
        if(lessonDay[6]===undefined){
            currentLesson = none
        }else{
            currentLesson = lessonDay[6]
        }
        if(lessonDay[7]===undefined){
            nextLesson = none
        }else{
            nextLesson = lessonDay[7]
        }
    }else if(h===13 && m<=30){
        if(lessonDay[6]===undefined){
            currentLesson = none
        }else{
            currentLesson = lessonDay[6]
        }
        if(lessonDay[7]===undefined){
            nextLesson = none
        }else{
            nextLesson = lessonDay[7]
        }
    }else if(h===13 && m>=35){
        if(lessonDay[7]===undefined){
            currentLesson = none
        }else{
            currentLesson = lessonDay[7]
        }
        if(lessonDay[8]===undefined){
            nextLesson = none
        }else{
            nextLesson = lessonDay[8]
        }
    }else if(h===14 && m<=20){
        if(lessonDay[7]===undefined){
            currentLesson = none
        }else{
            currentLesson = lessonDay[7]
        }
        if(lessonDay[8]===undefined){
            nextLesson = none
        }else{
            nextLesson = lessonDay[8]
        }
    }else if(h===14 && m>=25){
        if(lessonDay[8]===undefined){
            currentLesson = none
        }else{
            currentLesson = lessonDay[8]
        }
        if(lessonDay[9]===undefined){
            nextLesson = none
        }else{
            nextLesson = lessonDay[9]
        }
    }else if(h===15 && m<=10){
        if(lessonDay[8]===undefined){
            currentLesson = none
        }else{
            currentLesson = lessonDay[8]
        }
        if(lessonDay[9]===undefined){
            nextLesson = none
        }else{
            nextLesson = lessonDay[9]
        }   
    }else if(h>=15){
        currentLesson = none
        nextLesson = none
    }else{
        currentLesson = "przerwa"
        nextLesson="sprawdz niżej prosze cie bo bym musial caly kod przepisywac"
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
    htmlAllLessons.innerHTML = "Wszystkie lekcje dzisiaj: <br/>"
    for(let i = 0; i < lessonDay.length; i++){
        htmlAllLessons.innerHTML += lessonDay[i] + "<br/>"
    }
}


getTime()
