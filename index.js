  import Search from './js/model/Search.js';
  import { AutoComplete } from './js/model/Search.js';
  import * as viewMovie from './js/view/viewMovies.js';
  import { dom, renderLoader, clearLoader } from './js/view/base.js';
  import * as mode from './js/view/theme.js';
  import Movie from './js/model/Id.js';

  import * as watchNow from './movie/Id.js';




  const state = {};





  const matchAutoComplete = async () => {

      ;
      const query = viewMovie.getInput();


      const matches = [];


      if (query) {
          /*       
           
                
       state.autoComplete = new AutoComplete(query);
                
                
          await state.autoComplete.getTitle();
                
             viewMovie.renderAutoComplete(state.autoComplete.result);    
            
         console.log(state.autoComplete.result)
            }
            
    
    
    if(query.length === 0) matches = [];
    console.log(state);
    */
      }
  };


  const controlSearch = async () => {

      const query = viewMovie.getInput();

      if (query) {



          state.search = new Search(query);

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
  export const movieSelected = e => {

      console.log('it works', e, e.target);
      /*
          

          controlMovieId();

          return false;
          */
  }


  dom.searchForm.addEventListener('submit', e => {
      e.preventDefault();
      controlSearch();
  });

  dom.inputField.addEventListener('keyup', matchAutoComplete);

  /*

  const autoComplete = new AutoComplete('xmen');

      autoComplete.getTitle().then(data => {
           console.log(data,autoComplete.result);
           
       });
       */

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