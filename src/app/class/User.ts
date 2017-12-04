export class User {

  static connectedUser: User;

  public id: number;
  
      constructor(public name: string,public password: string ) {

        }
        setId = function(id) { this.id = id; } 
       getId = function() { return this.id; } 
    }

  