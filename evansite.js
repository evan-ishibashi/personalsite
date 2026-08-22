const work = document.getElementById('work-section');

work.addEventListener('click', function (e){
  if(e.target.dataset.url){
    window.open(e.target.dataset.url);
  }


})


// Hover scenes. Clicking one follows its link, so the animation is driven
// from here instead: it plays on hover, on keyboard focus, and once when the
// scene first scrolls into view — which is how it gets seen on a phone,
// where there is no hover and a tap just navigates.
const scenes = document.querySelectorAll('.scene');
const noMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function playScene(scene) {
  if (noMotion.matches || scene.classList.contains('is-playing')) return;
  scene.classList.add('is-playing');
}

scenes.forEach(function (scene) {
  scene.addEventListener('mouseenter', function () {
    playScene(scene);
  });

  scene.addEventListener('focus', function () {
    playScene(scene);
  });

  // every animation in a scene shares one duration, so the first to end
  // means the shot is over and the scene is ready to play again
  scene.addEventListener('animationend', function () {
    scene.classList.remove('is-playing');
  });
});

// play once on the way past, so the animation is not hover-only
if ('IntersectionObserver' in window) {
  const onScreen = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        playScene(entry.target);
        onScreen.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  scenes.forEach(function (scene) {
    onScreen.observe(scene);
  });
}
