  import { dom } from './base.js';
  


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
    if (movie.media_type === 'movie') {
      const image = 'https://image.tmdb.org/t/p/original/';
      const html = `
                        <li class="animated slideInRight imgBx">
                            <img src="${image+movie.poster_path}" alt="" />
                            <div class="movie__info">
                                <h4>${
                             shorternTitle(movie.original_title)}</h4>
                                <button> <a href="./movie/index.html?${movie.media_type}#${movie.id}" > watch Now</a></button>
                            </div>
                            </li>
                            
                            `;

      dom.movie.insertAdjacentHTML('beforeend', html);

    
    }

    if (movie.media_type === 'tv') {
      const image = 'https://image.tmdb.org/t/p/original/';
      const html = `
                            <li class="animated slideInRight imgBx">
                                <img src="${image+movie.poster_path}" alt="" />
                                <div class="movie__info">
                                    <h4>${
                                 shorternTitle(movie.original_name)}</h4>
                                                                    <button> <a href="./movie/index.html?${movie.media_type}#${movie.id}"  > watch Now</a></button>
                                </div>
                            </li>
            
            `;

      

      dom.movie.insertAdjacentHTML('beforeend', html);

      
    }

}


  export const renderResult = (movies) => {
    movies.forEach(eachMovie);
  }

  const shorternTitle = (title, limit = 17) => {

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


