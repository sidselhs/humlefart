gsap.registerPlugin(ScrollTrigger);
const hashtags = document.querySelectorAll(".hashtags");
hashtags.forEach((hashtag) => {
  gsap.from(hashtag, {
    y: 50,
    opacity: 0,
    scrollTrigger: {
      trigger: hashtag,
      scrub: 1,
      start: "center 80%",
      end: "+=80",
      //markers: true
    },
  });
});
