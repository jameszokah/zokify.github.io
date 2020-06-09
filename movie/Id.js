     
import { default as Movie,Tv } from '../js/model/Id.js'

import { dom } from '../js/view/base.js';

 const domStrings = {
     movieGrid: document.querySelector('.video__grid'),
     movieImg: document.querySelector(' #movie__img'),
 overview__container: document.querySelector('.overview__container'),
 movie__details: document.querySelector('.movie__details'),
 }
 
 const controlId = () => {
 
 /*
 
 let m = new Movie(324857);
    m.getMovie()
   .then(data =>{
       if(m.result2 !== undefined) {
       console.log(m.result2)
       }
   })
*/
/**
 * get id and media_type from url
 *
 */
  
  const getType = location.search;
   let type = 'movie'; //getType.replace('?','');
     console.log(type);
     
     const idz = location.hash;
     let getId = 78; //idz.replace('#', '');
     console.log(getId);
 
 const state = {};
 
 let movie = new Movie(getId);
 movie.getMovie().then(data => {
     renderId(movie.result);
 })
 
 /*/**
  * Movie Instance
  *
  */
 /*
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
 
     renderId(state.id.result);
     console.log(state.id.result);
         }
     }
 }
 */
 
 /**
  * Tv Instance
  *
  */
  
 /*
 const instanceTvVideo = async () => {
     while (type !== null) {
         if (type === 'tv') {
     
     state.video = new Tv(getId);
 
 
     await state.video.getIdTv();
 
 
     renderVideo(state.video.result);
     console.log(state.video.result);
         }
     }
     
 }
 */
 /*
 const instanceTvId = async () => {
     while (type !== null) {
         if (type === 'tv') {
     
     state.id = new Tv(getId);
 
 
     await state.id.getTv();
 
     renderId(state.id.result);
     console.log(state.id.result);
         }
     }
 }
 
export const renderMovieId =  () => {
    if (getId) {
    
   // instanceMovieVideo();
    
    instanceMovieId();
        
       
    }
    else if(getId) {
      // instanceTvVideo() 
       
       instanceTvId()
        
    }
}
*/
//end of Instance


/*
const eachVideo = (vid) => {
    if(vid.type === 'teaser') {
    let html = `
            <div class="vids">
           <iframe src="https://www.youtube.com/embed/${vid.key}" width="95%" height="210px" frameborder="0"></iframe> < /div>
           
      `;
    domStrings.movieGrid.insertAdjacentHTML('beforeend', html);
    }
}

const renderVideo = (video) => {
  video.forEach(eachVideo);
};
*/

const renderId = (ids) => {
    while(ids !== null) {
        if(ids !== undefined) {
    const image = 'https://image.tmdb.org/t/p/original/';
   const imgHTML = `
                              <img id="show" src="${image + ids.poster_path}" alt="${ids.title}" />
                     <h4>${ids.title}</h4>
                                `; 
                                
    const movieDetails =  `                                            <h6> Title:  ${ids.title}</h6> <
                                                    h6 > Release Date: ${ids.release_date} < /h6> <
                                                    h6 > Populatrity: ${ids.popularity} < /h6> <
                                                    h6 > Language: en < /h6> <
                                                    h6 > Vote Count: ${ids.vote_count}</h6>
           
    
    `;
    
    const overView = `
    <h6 >${ids.overview}</h6>
    
        <
        /div> <
        div class = "movie__likes" >
            <div class="center">
                                      <div class="heart">
                                      </div>
                                  </div> <
            /div>
    `;
    
    /*
    domStrings.movieContainer.insertAdjacentHTML('beforeend', html);
    domStrings.overview__container.insertAdjacentHTML('beforeend', overView);
    */
    
    adjacentHTML(domStrings.movieImg,'beforeend',imgHTML);
    
    adjacentHTML(domStrings.movie__details,'beforeend',movieDetails);
    
    adjacentHTML(domStrings.overview__container,'beforeend',overView);
    
}
}

}

const adjacentHTML = (selector,pos,html) => {
    selector.insertAdjacentHTML(pos,html);
}

}
window.addEventListener('load',controlId);