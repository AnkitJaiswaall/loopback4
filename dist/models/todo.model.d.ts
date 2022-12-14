import { Entity } from '@loopback/repository';
export declare class Todo extends Entity {
    id?: number;
    title?: string;
    complited: boolean;
    constructor(data?: Partial<Todo>);
}
export interface TodoRelations {
}
export declare type TodoWithRelations = Todo & TodoRelations;
