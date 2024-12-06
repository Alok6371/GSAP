function breakText() {
    var h1 = document.querySelector("h1")
    var splitText = h1.textContent

    // console.log(h1);

    var splittedText = splitText.split("")
    // console.log(splittedText);

    var clutter = ""
    var halfValue = splitText.length / 2
    console.log(Math.floor(halfValue));
    console.log();
    splittedText.forEach(function (elem, idx) {
        // console.log("Hello");
        // clutter = clutter + "Hey"
        // console.log(clutter);
        // console.log(elem);
        console.log(idx);

        if (idx < halfValue) {
            // console.log(elem, idx);
            clutter += `<span class="a"> ${elem}</span>`
        }
        if (elem == "r") {
            clutter += `<span class="c"> ${elem}</span>`
        }

        if (idx > halfValue) {
            // console.log(idx, elem);
            clutter += `<span class="b"> ${elem}</span>`
        }
    });
    // console.log(clutter);
    h1.innerHTML = clutter
}
breakText()


gsap.from("h1 .a", {
    y: 100,
    duration: 0.9,
    delay: 0.5,
    opacity: 0,
    stagger: 0.18,
})
gsap.from("h1 .b", {
    y: 100,
    duration: 0.9,
    delay: 0.5,
    opacity: 0,
    stagger: -0.18,
})
gsap.from("h1 .c", {
    y: -200,
    duration: 1,
    delay: 1.5,
    opacity: 0,
    stagger: -0.18,
})