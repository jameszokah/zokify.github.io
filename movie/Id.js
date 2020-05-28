     
import Movie from '../js/model/Id.js'

import { dom } from '../js/view/base.js';

 const domStrings = {
     movieGrid: document.querySelector('.video__grid'),
     movieContainer: document.querySelector('.movie__container-box .container'),
 }

/**
 * get id and media_type from url
 *
 */
  
  const getType = location.search;
   let type = getType.replace('?','');
     console.log(type);
     
     const idz = location.hash;
     let getId = idz.replace('#', '');
     console.log(getId);
 
 const state = {};
 
 /*/**
  * Movie Instance
  *
  */
 
 const instanceMovieVideo = async () => {
     while(type !== null) {
         if(type === 'movie') {
     
     state.video = new Movie(getId);
 
 
     await state.video.getIdMovie();
 
 
     renderVideo(state.video.result);
     console.log(state.video.result);
         }
     }
 }
 
 const instanceMovieId = async () => {
     while (type !== null) {
         if (type === 'movie') {
     
     state.id = new Movie(getId);
 
 
     await state.id.getMovie();
 
     //renderId(state.id.result2);
     console.log(state.id.result2);
         }
     }
 }
 
 /**
  * Tv Instance
  *
  */
 
 const instanceTvVideo = async () => {
     while (type !== null) {
         if (type === 'tv') {
     
     state.video = new Movie(getId);
 
 
     await state.video.getIdTv();
 
 
     renderVideo(state.video.result4);
     console.log(state.video.result4);
         }
     }
     
 }
 
 const instanceTvId = async () => {
     while (type !== null) {
         if (type === 'tv') {
     
     state.id = new Movie(getId);
 
 
     await state.id.getTv();
 
     //renderId(state.id.result3);
     console.log(state.id.result3);
         }
     }
 }
 
export const renderMovieId =  () => {
    if (getId) {
    
    instanceMovieVideo();
    
    instanceMovieId();
        
       
    }
    else if(getId) {
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
                             <h2> ${ids.title}</h2>
                           </div>
                           
                           
                       </div> <
                       div class = "movie__details" >
                           <h5>Movie Name: ${ids.title} </h5> <
                           h4 > Release Year: ${ids.release_date} </h4> <
                           h4 > Movie Plot: </h4> <
                           /div>
    
    `;
    
    domStrings.movieContainer.insertAdjacentHTML('beforeend', html);
}

