function page1Animation() {
    var tl = gsap.timeline()

    tl.from("nav h1", {
        y: -30,
        opacity: 0,
        duration: 0.5
    })
    tl.from("nav h4 ,nav button ", {
        y: -30,
        opacity: 0,
        duration: 0.4,
        stagger: 0.2
    })
    tl.from(".center-part1 h1", {
        x: -500,
        duration: 0.6,
        opacity: 0
    })
    tl.from(".center-part1 p", {
        x: -300,
        duration: 0.6,
        opacity: 0
    })
    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.6,
    })
    tl.from(".center-part2 img", {
        opacity: 0,
        x: 200,
        duration: 0.6
    }, "-=0.5")
    tl.from(".section1bottom img", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })

}
page1Animation()

// gsap.from(".services h3", {
//     x: -100,
//     opacity: 0,
//     duration: 0.5,
//     scrollTrigger: {
//         trigger: ".services h3",
//         scroller: "body",
//         markers: true,
//         start:"top 50%"
//     }
// }) 

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 0%",
        scrub: 2,
    }
})
tl2.from(".services", {
    y: 30,
    opacity: 0
})

tl2.from(".elem.left.line1", {
    x: -200,
    duration: 1,
    opacity: 0
},"line1")
tl2.from(".elem.right.line1", {
    x: 200,
    duration: 1,
    opacity: 0
},"line1")
tl2.from(".elem.left.line2", {
    x: -200,
    duration: 1,
    opacity: 0
},"line2")
tl2.from(".elem.right.line2", {
    x: 200,
    duration: 1,
    opacity: 0
},"line2")