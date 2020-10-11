
export default class Tv {
  constructor(id) {
    this.id = id;
  }



  async getIdTv() {

    try {
      const key = '321b9w646b5ff5b896dd84bw26170837fb';


      const request = await fetch(`https://api.themoviedb.org/3/tv/${this.id}/videos?api_key=${key}`);
      const response = await request.json();
      this.result = response.results;


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
      this.result = response;


    }
    catch (error) {
      alert(error);

    }

  }


}
