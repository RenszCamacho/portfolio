export interface Work {
    name: string;
    company: string;
    desc: string;
}

export interface IExperience {
   year: string;
   works: Work[];
}
