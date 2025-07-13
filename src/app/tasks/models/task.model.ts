export interface Task {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
    description?: string;
}