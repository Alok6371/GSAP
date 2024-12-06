
// **************************Test Move
// gsap.from("#page2 h1", {
//     opacity: 0,
//     x: 500,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller: "body",
//         markers: true,
//         start:"top 50%",
//     }
// })
// gsap.from("#page2 h2", {
//     opacity: 0,
//     x: -500,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page2 h2",
//         scroller: "body",
//         markers: true,
//         start:"top 50%",
//     }
// })

// ******************************* Box

gsap.from("#page2 #box", {
    scale: 0,
    opacity: 0, duration: 1,
    rotate: 340,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end:"top 30%",
        // scrub:true  //for scrollto animation
        scrub:1,  //Range is 1-5
        pin:true
    }
})