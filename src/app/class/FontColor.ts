export class FontColor {
    public red:number;
    public green:number;
    public blue:number;
    public alpha:number;

        constructor(){
    
            this.red    = 255;
            this.green  = 255;
            this.blue   = 255;
            this.alpha  = 1;
            
        }
    
       
    
        toString(){
            return "rgba(" + this.red + ", " + this.green + ", " + this.blue + ", " + this.alpha + ")";
        }
    
    }