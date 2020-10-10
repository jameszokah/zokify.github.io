     import Movie from '../js/model/Id.js';
     import Tv from '../js/model/Tv.js'

     import { dom } from '../js/view/base.js';

     import * as htmlMockup from './idHtml.js';


     const controlId = () => {
       const id = window.location.hash.replace('#', '');
       const type = window.location.search.replace('?', '');

       const movie = new Tv(7225);
       movie.getTv().then(data => {
         console.log(movie.result)
       })
       window.m = movie;
       console.log(m);
       if (id) {
         if (type === 'movie') newMovie(id, type);
         else if (type === 'tv') newTv(id, type);


       }
     }

     const state = {};



     const newMovie = async (id, type) => {
       if (type === 'movie') {

         state.movie = new Movie(id);

         await state.movie.getMovie();

         await state.movie.getIdMovie();

         htmlMockup.renderId(state.movie);

         htmlMockup.renderTrailer(state.movie.result, state.movie);
       }
     }

     const newTv = async (id, type) => {
       if (type === 'tv') {

         state.tv = new Tv(id);

         await state.tv.getTv();
         htmlMockup.renderId(state.tv)

         console.log(state.tv.result);
       }

     }

     /*
          const renderMovie = movie => {
            const image = 'https://image.tmdb.org/t/p/original/';

            let movieImg = `
             <img id="show" src="${image + movie.poster_path}" alt="${movie.title}" />
        `;


            domStrings.movie__img.innerHTML = movieImg;

            let imgTitle = `<h4>${movie.original_title}</h4>
         `;

            domStrings.img__title.innerHTML = imgTitle;

            let overView1 = `
                         <div class="overview__container">
                                                <h6> ${movie.overview} </h6>
                                     
                                                           </div> <div class="movie__likes">
                                     
                                                                 <div class="center">
                                                                    <div class="heart">
                                                                       </div>
                                                                   </div> </div>
                                                             
         `;

            domStrings.overview1.innerHTML = overView1;
            let title = `
                        
                        <h6> Title: ${movie.original_title}</h6> `;
            let releaseDate = `
                        <h6> Release Date: ${movie.release_date} </h6>`;

            let popularity = `<h6> Popularity: ${movie.popularity} </h6>`;

            let language = `<h6> Language: ${movie.original_language}</h6>`;

            let voteCount = `<h6> Vote Count:  ${movie.vote_count}</h6>
        `;



            domStrings.title.innerHTML = title;

            domStrings.release__date.innerHTML = releaseDate;

            domStrings.popularity.innerHTML = popularity;

            domStrings.language.innerHTML = language;

            domStrings.vote__count.innerHTML = voteCount;

          }




          const HTML = (selector, html) => {

            selector.innerHTML = html;
          }


          const renderTv = movie => {
            console.log(movie)

          }
     */


     window.addEventListener('load', controlId);
     /**
      * get Session
      *
      */
     /*
      const getMovieId = sessionStorag.getItem('movieId');
     
     const getTvId = sessionStorage.getItem('tvId');
     console.log(getMovieId,getTvId);
     
     const state = {};
     */
     /*/**
      * Movie Instance
      *
      */
     /*
   
 const instanceMovieVideo = async () => {
     state.video = new Movie(getMovieId);
 
 
     await state.video.getIdMovie();
 
 
     renderVideo(state.video.result);
 }
 
 const instanceMovieId = async () => {
     state.id = new Movie(getMovieId);
 
 
     await state.id.getMovie();
 
     renderId(state.id.result2);
 }
 */
     /**
      * Tv Instance
      *
      */
     /*
 const instanceTvVideo = async () => {
     state.video = new Movie(getTvId);
 
 
     await state.video.getIdTv();
 
 
     renderVideo(state.video.result4);
 }
 
 const instanceTvId = async () => {
     state.id = new Movie(getTvId);
 
 
     await state.id.getTv();
 
     renderId(state.id.result3);
 }
 
export const renderMovieId =  () => {
    if (getMovieId) {
    
    instanceMovieVideo();
    
    instanceMovieId();
        
       
    }
    else if(getTvId) {
       instanceTvVideo() 
       
       instanceTvId()
        
    }
}
//end of Instance

renderMovieId();
const eachVideo = (vid) => {
    let html = `
            <div class="vids">
           <iframe src="https://www.youtube.com/embed/${vid.key}" width="95%" height="210px" frameborder="0"></iframe> < /div>
           
      `;
    domStrings.movieGrid.insertAdjacentHTML('beforeend', html);
}

const renderVideo = (video) => {
  video.forEach(eachVideo);
};

const renderId = (ids) => {
    const image = 'https://image.tmdb.org/t/p/original/';
   let html = `
                       <div class="img__card">
                           <div id="movie__img">
                               
                              <img id="show" src="${image + ids.poster_path}" alt="title" />
                             <h2>Movie Title: ${ids.title}</h2>
                           </div>
                           
                           
                       </div> <
                       div class = "movie__details" >
                           <h3>Movie Title:</h3> <
                           h4 > Release Year: ${ids.released} </h4> <
                           h4 > Movie Plot: </h4> <
                           /div>
    
    `;
    
    domStrings.movieContainer.insertAdjacentHTML('beforeend', html);
}*/