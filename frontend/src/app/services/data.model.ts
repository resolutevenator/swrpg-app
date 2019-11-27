export interface Talent {
    name: string,
    key: string,
    passive: boolean,
    ranked: boolean,
    description: string
}

export interface Race {
    name: string,
    key: string,
    books: string[]
}

export interface RaceInfo {
    brawn: number,
    agility: number,
    cunning: number,
    intellect: number,
    willpower: number,
    presence: number,
    wounds: number,
    strain: number,
    xp: number,
    abilities: string[]
}

export interface Spec {
    name: string,
    key: string,
    books: string[],
    career: string
}

export interface SpecInfo {
    careerSkills: string[],
    bonusCareerSkills: string[],
    talentTree: {
        row0: boolean[],
        row1: boolean[],
        row2: boolean[],
        row3: boolean[],
        row4: boolean[],
        horizontalConnections: {
            row0: boolean[],
            row1: boolean[],
            row2: boolean[],
            row3: boolean[],
            row4: boolean[]
        },
        verticalConnections: {        
            row0: boolean[],
            row1: boolean[],
            row2: boolean[],
            row3: boolean[],
            row4: boolean[]
        }
    }
}