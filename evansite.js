const work = document.getElementById('work-section');

work.addEventListener('click', function (e){
  window.open(e.target.dataset.url);


})