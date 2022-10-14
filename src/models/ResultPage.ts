import { Character } from './Character';
export interface ResultPage{
    info?: {
        count?: number;
        pages?:number;
        next?:string;
        prev?:any;
    }
    results?: Character[];
} 