
export default class Search {
    constructor(query) {
        this.query = query;
    }


    async getResult() {
        
        
        try {
            
            const key = '321b9646b5ff5b896dd84b26170837fb';

            const request = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${key}&query=${this.query}`);
              const req = await request.json()
            this.result = req.results;

        }

        catch (error) {
            console.log(error);
        }


    }
}

export class AutoComplete {
    constructor(query) {
        this.query = query;
        this.title = [];
    }
    
    async getTitle() {
        
        
        
        try {
            const key = '321b9646b5ff5b896dd84b26170837fb';

            
            const request = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${key}&query=${this.query}`);
    const response = await request.json();
       this.result = response.results;
        
       
        }
        
        catch (error) {
            console.log(error);
        }
    }
    
    
}


