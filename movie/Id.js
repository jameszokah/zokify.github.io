     
import { default as Movie, Tv } from '../js/model/Id.js'

import { dom } from '../js/view/base.js';

 const domStrings = {
     movieGrid: document.querySelector('.video__grid'),
     movie__img: document.querySelector(' #movie__img'),
     img__title: document.querySelector(' #img__title'),
     overview__container: document.querySelector(' .overview__container'),
     
 }
 
 const controlId =  () => {
    const id = 78;//window.location.hash.replace('#','');
    const type = 'movie';//window.location.search.replace('?','');
    /*
    const movie = new Movie(78);
    movie.getMovie().then(data => {
        console.log(movie.result)
    })
    console.log(movie);
    */
     if(id) {
         newMovie(id,type);
        
        newTv(id,type);
     }
     
     
 }
 
 const state = {};
 
 const newMovie = async (id,type) => {
     if(type === 'movie') {
         
         state.movie = new Movie(id);
         
        await state.movie.getMovie();
           
         renderMovie(state.movie.result);
     }
 }
 
 const newTv = async (id,type) => {
     if(type === 'tv') {
          
         state.tv = new Tv(id);
         
        await state.tv.getTv();
        
        console.log(state.tv.result);
     }
     
 }
 
 
const  renderMovie = movie => {
      const image = 'https://image.tmdb.org/t/p/original/';
    
   let movieImg = `
        <img id="show" src="${image + movie.poster_path}" alt="${movie.title}" />
   `;
   
    
    domStrings.movie__img.innerHTML = movieImg;
    
    let imgTitle = `<h4>${movie.original_title}</h4>
    `;
    
    domStrings.img__title.innerHTML = imgTitle;
    
    let overView1 = `
                             
                                <h6 >${movie.overview}</h6>
                                
    `;
    
    domStrings.overview__container.innerHTML = overView1;
    
    
}
 
 
 
 
 
 const HTML = (selector,html) => {
     
     selector.innerHTML = html;
 }
 
 
 
 
window.addEventListener('load',controlId);
/**
 * get Session
 *
 */
 /*
  const getMovieId = sessionStorage.getItem('movieId');
 
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