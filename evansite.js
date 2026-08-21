const work = document.getElementById('work-section');

work.addEventListener('click', function (e){
  if(e.target.dataset.url){
    window.open(e.target.dataset.url);
  }


})

// phones have no hover, so a tap plays (and stops) the shot
const court = document.querySelector('.bb-court');

if (court) {
  court.addEventListener('click', function () {
    court.classList.toggle('is-live');
  });

  court.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      court.classList.toggle('is-live');
    }
  });
}
