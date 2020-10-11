 // import Search from './js/model/Search.js';
  import {default as Search, AutoComplete } from './js/model/Search.js';
  import * as viewMovie from './js/view/viewMovies.js';
  import { dom, renderLoader, clearLoader } from './js/view/base.js';
  import * as mode from './js/view/theme.js';
  import Movie from './js/model/Id.js';




  const state = {};


  const controlSearch = async (query) => {
           
      if (query) {
        
          state.search = new Search(query);
              console.log(query);
          viewMovie.clearInput();
          viewMovie.clearHTML();
          renderLoader(dom.movieImg);



          await state.search.getResult();
          clearLoader();

          viewMovie.renderResult(state.search.result);
      }

  }

  const controlMovieId = () => {
      if (dom.movieInfo) {
          watchNow.renderMovieId()

      }

  }
  

  dom.searchForm.addEventListener('submit', e => {
      e.preventDefault();
      const query = viewMovie.getInput();
      controlSearch(query);
  });
  
  window.addEventListener('load',e => {
    let randomQuery = ['Black panther','Flash','Bumblebee','Merlin','Shannarah chronicles','Deadpool'];

const random = Math.floor(Math.random() * randomQuery.length);

console.log(randomQuery[random],random)
let query;

query = randomQuery[random],random;


      controlSearch(query);
    
    
  });


  
  const taggleCheck = e => {
      console.log(e.target)

      if (e.target.checked) {

          mode.darkMode();

      }
      else {

          mode.lightMode();


      }
      const currentTheme = localStorage.getItem('theme') || null;

      console.log(currentTheme)

      if (currentTheme === 'dark') {
          dom.slideTwoCheck.checked = true;
          if (dom.slideTwoCheck.checked == true)
              dom.slideTwoLabel.innerText = currentTheme;


      }

      else if (currentTheme === 'light') {
          dom.slideTwoCheck.checked = false;
          if (dom.slideTwoCheck.checked == true)
              dom.slideTwoLabel.innerText = currentTheme;

      }

  };

  const updateCheck = () => {

      let currentTheme = localStorage.getItem('theme');

      if (currentTheme) {
          document.documentElement.setAttribute('data-theme', currentTheme);

          if (document.documentElement.getAttribute('data-theme') === 'dark') {
              dom.slideTwoCheck
          }
          else {
              dom.slideTwoCheck.checked = false;
          }

      }
      
      if (currentTheme === 'dark') {
          dom.slideTwoCheck.checked = true;
          if (dom.slideTwoCheck.checked == true)
              dom.slideTwoLabel.innerText = currentTheme;

      }

      else if (currentTheme === 'light') {
          dom.slideTwoCheck.checked = false;
          if(dom.slideTwoCheck.checked == false)
          dom.slideTwoLabel.innerText = currentTheme;
        
      }

    

  };


  dom.slideTwoCheck.addEventListener('change', taggleCheck, false);


  window.addEventListener('load', updateCheck, false);


  dom.burgerBox.addEventListener('click', e => {
      dom.navBar.style.display = 'block';
  });

  dom.burgerBox.removeEventListener('click', e => {
      dom.navBar.style.display = 'none';
  });
  while (dom.movieInfo !== null) {
      if (dom.movieInfo) {
          dom.movieInfo.addEventListener('click', e => {
              console.log(e.target);
          });
      }

  }