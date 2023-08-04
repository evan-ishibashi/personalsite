const work = document.getElementById('work-section');

work.addEventListener('click', function (e){
  console.log(e);
  window.open(e.target.dataset.url);


})