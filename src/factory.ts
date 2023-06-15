import { UUID } from 'node:crypto';
import crypto from 'node:crypto'

interface IRandomUUID {
    generateUUID(): UUID,  
    getUUID(): UUID | null,
    removeUUID(): null,
}

class RandomUUID implements IRandomUUID {
    private currentUUID: UUID | null;

    constructor(){
        this.currentUUID = null;
    }
    
    public generateUUID() {
        this.currentUUID = crypto.randomUUID();
        return this.currentUUID;
    }

    public getUUID(): UUID | null {
        return this.currentUUID;
    }

    public removeUUID() {
        this.currentUUID = null;
        return null
    }
}

export const classUUID = new RandomUUID();
