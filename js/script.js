fetch("/html/component_nav.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("nav-component").innerHTML = data;
    })

fetch("/html/component_footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer-component").innerHTML = data;
    })


function toggleClass() {
    const items = document.getElementsByClassName("nav-item");
    for(const item of items) {
        item.classList.toggle("nav-shown");
    }
}

function goBook() {
    location.replace("/html/class.html#book-class")
}
function goSchedule() {
    location.replace("/html/class.html#class-schedule-timetable")
}
function goHelp() {
    location.replace("/html/help.html")
}

const help = document.querySelector(".help .title-icon")

help.addEventListener("mouseover", () => {
    document.querySelector(".help-video").classList.toggle("show");
})
help.addEventListener("mouseout", () => {
    document.querySelector(".help-video").classList.toggle("show");
})