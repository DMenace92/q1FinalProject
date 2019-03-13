let images = document.querySelectorAll(".images");
axios.get('https://gateway.marvel.com/v1/public/comics?apikey=1505e799a8ca64cdcca6038e57ea8c66&limit=100').then((res) => {
  console.log(res)
  // Loop over images and set src for each one
  let comicResults = res.data.data.results;
  let newTag = document.querySelector(".atag")
  let img = document.querySelector('.images').getAttribute("src")


  console.log(newTag)
  for (let i = 0; i < comicResults.length; i++) {
    let container = document.querySelector('.scroll-wrapper')
    if (comicResults[i].images.length !== 0) {
      let newA = document.createElement('a');
      let newImg = document.createElement('img');
      newA.appendChild(newImg);
      container.appendChild(newA);
      newImg.src = comicResults[i].images[0].path + '.jpg';
      newImg.addEventListener('click', function(e) {
        console.log(e.target.src)
        let otherImg = localStorage.setItem('img src', e.target.src);
        window.location.href = 'index3.html';

})
    }

  }

  // set this up with the click tag

})
