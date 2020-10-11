
export const dom = {
    searchForm: document.querySelector('.search'),
    inputField: document.querySelector('#search'),
    movie: document.querySelector('.movie'),
    slider: document.querySelector('.slide'),
    movieImg: document.querySelector('.movie__img'),
    slideTwoCheck: document.querySelector('.slideTwo input[type="checkbox"]'),
    slideTwoLabel: document.querySelector('label[for="slideTwo"]'),
    burgerBox: document.querySelector('.burger__box'),
    navBar: document.querySelector('.nav__bar'),
    movieInfo: document.querySelector('.movie__info'),
    

};

const elementStrings = {
    loader: 'loader__container',
    loader2: 'loader__2',
    
};


export const renderLoader = parent => {
   let load = `
      <div class="${elementStrings.loader}">
                    <div class="loader__circle"></div>
                    <div class="loader__circle"></div>
                    <div class="loader__circle"></div>
                </div>
    `;
    
    parent.insertAdjacentHTML('afterbegin', load);
};

export const clearLoader = () => {
    
    const clearLoad = document.querySelector(`.${elementStrings.loader}`);
    if(clearLoad) {
    clearLoad.parentElement.removeChild(clearLoad);
    console.log(clearLoad);
    }
};


export const renderLoader2 = parent => {
    
    let loader = `
                   <div class="${elementStrings.loader2}">
                       <ul>
                           
                           <li></li>
                           <li></li>
                           <li></li>
                           <li></li>
                           <li></li>
                           <li></li>
                           
                       </ul>
                   </div>
    `;
    
    parent.insertAdjacentHTML('afterbegin',loader);
}

export const clearLoader2 = () => {
    
    let loader_2 = document.querySelector(`.${elementStrings.loader2}`);
    
    if(loader_2) {
        loader_2.parentElement.removeChild(loader_2);
        console.log(loader_2);
    }
    
}