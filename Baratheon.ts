import { NobleHouse } from "./NobleHouse";

export class Baratheon extends NobleHouse {
    nameHouse: string; 
    motto: string; 
    numSoldiers: number;
    

    constructor(nameHouse: string, motto: string, numSoldiers: number){
        super(nameHouse, motto, numSoldiers);
      }
}
