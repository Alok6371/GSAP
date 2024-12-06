// window.addEventListener("wheel", function (e) {
//     // console.log((e.deltaY)*10);
//     if (e.deltaY > 0) {
//         console.log("Sedha scrolling");
//     } else {
//         console.log("Reverse Scroling");
//     }
// })

// gsap.to(".marque", {
//     transform: 'translateX(-100%)',
//     duration: 3,
//     repeat: -1,
//     ease:"none"
// })


window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        gsap.to(".marque", {
            transform: `translateX(-200%)`,
            duration: 4,
            repeat: -1,
            ease: "none",
        })
        gsap.to(".marque img", {
            rotate: 180
        })
    } else {
        gsap.to(".marque", {
            transform: `translateX(00%)`,
            duration: 4,
            repeat: -1,
            ease: "none"
        })
        gsap.to(".marque img", {
            rotate: 0
        })
    }
})