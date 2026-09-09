export interface ITasks {
    id:string;
    title:string;
    description:string;
    completed:boolean;
    priority: 'low'|'medium'|'high';
    createdAt:string;

}
