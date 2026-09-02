export interface ITasks {
    id:number;
    title:string;
    description:string;
    completed:boolean;
    priority: 'low'|'medium'|'high';
    createdAt:string;

}
