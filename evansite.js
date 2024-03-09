const work = document.getElementById('work-section');

work.addEventListener('click', function (e){
  if(e.target.dataset.url){
    window.open(e.target.dataset.url);
  }


})