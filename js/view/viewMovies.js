  import { dom } from './base.js';
  import { movieSelected } from '../../index.js';


export const getInput = () => {
    return dom.inputField.value;
    
};

export const clearInput = () => {
    dom.inputField.value = '';
    
};

export const clearHTML = () => {
    dom.movie.innerHTML = '';
    
    
    
};

const eachMovie = (movie) => {
     
     
    
    
    
    
    // original_type = media_type === 'movie'?original_type = 'original_title': original_type= 'original_name'; 
    if(movie.media_type === 'movie') {
    const image = 'https://image.tmdb.org/t/p/original/';
    const html = `
                        <li class="animated slideInRight imgBx">
                            <img src="${image+movie.poster_path}" alt="" />
                            <div class="movie__info">
                                <h4>${
                             shorternTitle(movie.original_title)}</h4>
                                <button> <a href="#${movie.id}" > watch Now</a></button>
                            </div>
                        </li>
        
        `;
    
    const slider = `
         <img src="${image}w185${movie.poster_path}" alt="">
       `;
    
    dom.movie.insertAdjacentHTML('beforeend', html);
    
    //  dom.slider.insertAdjacentHTML('beforeend', slider);
    }
    
    if(movie.media_type === 'tv') {
        const image = 'https://image.tmdb.org/t/p/original/';
        const html = `
                            <li class="animated slideInRight imgBx">
                                <img src="${image+movie.poster_path}" alt="" />
                                <div class="movie__info">
                                    <h4>${
                                 shorternTitle(movie.original_name)}</h4>
                                                                    <button> <a href="#${movie.id}"  > watch Now</a></button>
                                </div>
                            </li>
            
            `;
           
if (dom.movieButton) {
    dom.movieButton.addEventListener('click', movieSelected(movie.id,movie.media_type))
}
        const slider = `
             <img src="${image}w185${movie.poster_path}" alt="">
           `;
        
        dom.movie.insertAdjacentHTML('beforeend', html);
        
        //  dom.slider.insertAdjacentHTML('beforeend', slider);
    const movieCallback = fn => {
        
    }    
    }
    
}


            /*
            
            
onclick="${movieSelected(movie.id,movie.media_type)}" <a href="./movie/index.html" > watch Now</a>

*/
export const renderResult = (movies) => {
    movies.forEach(eachMovie);
}

const shorternTitle = (title,limit = 17) => {
    
    const newTitle = [];
    
    
    
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);

            }
            return acc + cur.length;

        }, 0);
       return `${newTitle.join(' ')} ...`;
    }
 
    return title;
}


/*

const matchingTitle = (title,query) => {
    let titleArr = [...title];
    let matches = [];
    matches = titleArr.filter(cur => {
        const regex = new regExp(`^${query}`,'gi');
        return cur.match(regex);
    });
    
    console.log(titleArr);
    
};

const eachTitle = movie => {
    if(movie.original_title) {
       // console.log(movie.original_title);
      matchingTitle(movie.original_title,getInput);
        
    }
    
};

export const renderAutoComplete = (movies) => {
   movies.forEach(eachTitle);
   console.log(movies);
} */