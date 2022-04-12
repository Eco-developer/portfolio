import { AboutInterface } from './index';
import { ExperienceInterface } from './index';
import { ProjectInterface } from './index';
import { SkillInterface } from './index';

export interface DataJson {
    abouts: AboutInterface[],
    experiences: ExperienceInterface[]
    skills: SkillInterface[],
    projects: ProjectInterface[],
}