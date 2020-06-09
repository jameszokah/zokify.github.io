     
import Movie from '../js/model/Id.js'

import { dom } from '../js/view/base.js';

 const domStrings = {
     movieGrid: document.querySelector('.video__grid'),
     movieContainer: document.querySelector('.movie__container-box .container'),
 }

/**
 * get Session
 *
 */
  const getMovieId = sessionStorage.getItem('movieId');
 
 const getTvId = sessionStorage.getItem('tvId');
 console.log(getMovieId,getTvId);
 
 const state = {};
 
 /*/**
  * Movie Instance
  *
  */
 
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
 
 /**
  * Tv Instance
  *
  */
 
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
}