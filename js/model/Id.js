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
          
          
      }
      catch(error) {
          alert(error);
          
      }
 
    }
    
   async getIdTv() {
   
       try {
           const key = '321b9646b5ff5b896dd84b26170837fb';
   
   
           const request = await fetch(`https://api.themoviedb.org/3/tv/${this.id}/videos?api_key=${key}`);
           const response = await request.json();
           this.result4 = response.results;
   
   
       }
       catch (error) {
           alert(error);
   
       }
   
   }


  async getMovie() {
  
      try {
          const key = '321b9646b5ff5b896dd84b26170837fb';
  
  
          const request = await fetch(`https://api.themoviedb.org/3/movie/${this.id}?api_key=${key}`);
          const response = await request.json();
          this.result2 = response;
  
  
      }
      catch (error) {
          alert(error);
  
      }
  
  }

async getTv() {

    try {
        const key = '321b9646b5ff5b896dd84b26170837fb';


        const request = await fetch(`https://api.themoviedb.org/3/tv/${this.id}?api_key=${key}`);
        const response = await request.json();
        this.result3 = response;


    }
    catch (error) {
        alert(error);

    }

}
  

}

