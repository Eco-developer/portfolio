import { WorksInterface } from "./index";

export interface ExperienceInterface {
    year: string;
    name: string,
    company: string,
    description: string,
    acomplishment?: string[],
    resposabilities: string[],
}