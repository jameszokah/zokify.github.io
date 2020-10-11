const dom = {
  movieContainerBox: document.querySelector('.movie__container-box'),
  movieBox: document.querySelector('#movie__box'),
}


export const renderId = result => {
  const image = 'https://image.tmdb.org/t/p/original/';


  const mackup =
    `<div class="container">
       <div class="img__card">
            <div id="movie__img">
              
                         <img id="show" src="${image+result.image}" alt="${result.title}" />
                         
            </div>
            <div id="img__title">
              
                         <h4>${result.title}</h4>
            </div>
            <div id="overview1">
              <div class="overview__container">
                <h6>${result.overview}</h6>
              </div>
              <div class="movie__likes">
                <div class="center">
                  <div class="heart">
                  </div>
                </div>
              </div>
              
            </div>
          </div> <div class="movie__details" >
         <div id="title">
               <h6> Title: ${result.title}</h6>
                  
          </div> <div id="release__date">
         <h6>Release Date:  ${result.releaseDate}</h6 </div> <div id="popularity">
  
        <h6>Popularity:  ${result.popularity}</h6> </div> <div id="language" >
         <h6>Language:  ${result.language}</h6> </div> <div id="vote__count">
       <h6>Vote Count: ${result.voteCount}</h6> </div> </div> </div>`;

  dom.movieContainerBox.insertAdjacentHTML('beforeend', mackup);
};

export const renderTrailer = (trailer, movie) => {
  const eachTrailer = trailer.map(el => {

    return ` <h4 class="trailer__title">${el.name}</h4>
        <iframe src="https://www.youtube.com/embed/${el.key}" width="95%" height="210px" frameborder="0"></iframe>`;

  });
  const mackup = `    
  <div class="video__grid grid">
<div class="vids teaser__grid">
      ${eachTrailer}
        </div> <div class="vids">
  <p>
            <h3>Overview:</h3>
            <p class="overview__container">
              <h6 id="overview">${movie.overview}</h6>
            </p>
          </p> <p>
  <button type="button" id="full__movie"><a href="${movie.homepage}">watch full movie here</a></button> </p> </div> </div>

  `

  dom.movieBox.insertAdjacentHTML('beforeend', mackup);
}