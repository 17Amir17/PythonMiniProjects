export interface Process{
    process: string;
    PID: number;
    username: string;
}

export interface Stats{
    host: string;
    cpu_usage: number;
    ram_usage: number;
    processes: Process[];
}