
export const dom = {
    searchForm: document.querySelector('.search'),
    inputField: document.querySelector('#search'),
    movie: document.querySelector('.movie'),
    slider: document.querySelector('.slide'),
    movieImg: document.querySelector('.movie__img'),
    slideTwoCheck: document.querySelector('.slideTwo input[type="checkbox"]'),
    burgerBox: document.querySelector('.burger__box'),
    navBar: document.querySelector('.nav__bar'),
    movieInfo: document.querySelector('.movie__info'),

};

const elementStrings = {
    loader: 'loader__container',
    
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