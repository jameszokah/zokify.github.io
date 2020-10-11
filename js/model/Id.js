 export default class Movie {
    constructor(id) {
        this.id = id;
    }

    async getIdMovie() {
 
      try{
       const key = '321b9646b5ff5b896dd84b26170837fb';
          
          
        const request = await fetch(`https://api.themoviedb.org/3/movie/${this.id}/videos?api_key=${key}`);
        const response = await request.json();
        this.result = response.results;
          console.log('getIdMovie ' + this.result)
          window.s = response;
          
      }
      catch(error) {
          alert(error);
          
      }
 
   }
    
   

  async getMovie() {
  
      try {
          const key = '321b9646b5ff5b896dd84b26170837fb';
  
  
          const request = await fetch(`https://api.themoviedb.org/3/movie/${this.id}?api_key=${key}`);
          const response = await request.json();
          this.result = response;
           console.log(`getMovie ${this.result}`);
           
           this.id = response.id;
           this.image = response.poster_path;
           this.title = response.original_title;
           this.popularity = response.popularity;
           this.releaseDate = response.release_date;
           this.revenue = response.revenue;
           this.imdbId = response.imdb_id;
           this.overview = response.overview;
           this.tagline = response.tagline;
           this.status = response.status;
           this.homepage = response.homepage;
           this.budget= response.budget;
          this.runtime = response.runtime
          this.voteCount = response.vote_count;
          this.voteAverage = response.vote_average;
          this.backDropPath = response.backdrop_path;
           window.r = this.result;
  
      }
      catch (error) {
          alert(error);
  
      }
  
  }


  

}




