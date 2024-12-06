var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")


main.addEventListener("mousemove", function (e) {
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        ease: "back.out",
        duration: 1
    })
})

imageDiv.addEventListener("mouseenter", function () {
    cursor.innerHTML = "VIEW MORE"
    gsap.to(cursor, {
        scale: 4,
        backgroundColor:"#e9cecead"
    })
})
imageDiv.addEventListener("mouseleave", function () {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1
    })
})