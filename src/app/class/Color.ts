export class Color {
    public red:number;
    public green:number;
    public blue:number;
    public alpha:number;

        constructor(){
    
            this.red    = 128;
            this.green  = 128;
            this.blue   = 128;
            this.alpha  = 0.5;
            
        }
    
       
    
        toString(){
            return "rgba(" + this.red + ", " + this.green + ", " + this.blue + ", " + this.alpha + ")";
        }
    
    }