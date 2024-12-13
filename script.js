document.addEventListener("DOMContentLoaded", () => {
    // GSAP Animations for Scroll (Desktop and Mobile)
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".image", {
        scrollTrigger: {
            trigger: ".image-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
    });

    gsap.from(".headline", {
        scrollTrigger: {
            trigger: ".text-section",
            start: "top 85%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: -50,
        duration: 1.2,
    });

    gsap.from(".message", {
        scrollTrigger: {
            trigger: ".message",
            start: "top 90%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: 100,
        duration: 1.5,
    });

    gsap.from(".signature", {
        scrollTrigger: {
            trigger: ".signature",
            start: "top 95%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.5,
        duration: 1,
    });

    // Touch Effects (Mobile)
    const image = document.querySelector(".image");
    const messageBox = document.querySelector(".message-box");

    let startX, startY;

    image.addEventListener("touchstart", (e) => {
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
    });

    image.addEventListener("touchmove", (e) => {
        const touch = e.touches[0];
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;

        image.style.transform = `scale(1.2) translate(${deltaX}px, ${deltaY}px)`;
    });

    image.addEventListener("touchend", () => {
        image.style.transform = "scale(1)";
        gsap.to(image, { scale: 1, x: 0, y: 0, duration: 0.5 });
    });

    // Hover Effects (Desktop)
    image.addEventListener("mouseenter", () => {
        gsap.to(image, { scale: 1.1, duration: 0.3 });
    });

    image.addEventListener("mouseleave", () => {
        gsap.to(image, { scale: 1, duration: 0.3 });
    });

    const headline = document.querySelector(".headline");

    headline.addEventListener("mouseenter", () => {
        gsap.to(headline, { color: "#ff4757", duration: 0.3 });
    });

    headline.addEventListener("mouseleave", () => {
        gsap.to(headline, { color: "#000", duration: 0.3 });
    });

    // Touch Move Text Section (Mobile)
    const textSection = document.querySelector(".text-section");

    textSection.addEventListener("touchstart", (e) => {
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
    });

    textSection.addEventListener("touchmove", (e) => {
        const touch = e.touches[0];
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;

        textSection.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });

    textSection.addEventListener("touchend", () => {
        textSection.style.transform = "translate(0, 0)";
        gsap.to(textSection, { x: 0, y: 0, duration: 0.5 });
    });
});
