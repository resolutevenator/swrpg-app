export interface Talent {
    name: string,
    key: string,
    ranked: boolean,
    description: string,
    type: ActionType
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
        row0: string[],
        row1: string[],
        row2: string[],
        row3: string[],
        row4: string[],
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

export interface GenSpecInfo {
    bonusCareerSkills: string[],
    talentTree: {
        row0: string[],
        row1: string[],
        row2: string[],
        row3: string[],
        row4: string[],
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

export interface Weapon {
    name: string,
    key: string,
    category: WeaponCategory,
    skill: Skills,
    damage: number,
    crit: number,
    range: RangeBand,
    encum: number,
    hp: number,
    price: number,
    rarity: number,
    properties: string[],
    damageAdditive: boolean,
    restricted: boolean
}

export interface Armor {
    name: string,
    key: string,
    category: string,
    meleeDefense: number,
    rangedDefense: number,
    soak: number,
    price: number,
    encum: number,
    hp: number,
    rarity: number,
    restricted: boolean,
    properties: string[]
}

export interface Gear {
    name: string,
    key: string,
    category: string,
    price: number,
    encum: number,
    rarity: number,
    restricted: boolean,
    properties: string[]
}

export interface Starship {
    name: string,
    key: string,
    type: string,
    hyperdrive: string,
    navicomputer: string,
    sensorRange: string,
    shipsComplement: string,
    encum: number,
    passengerCapacity: number,
    price: number,
    rarity: number,
    hp: number, 
    weapons: Weapon[],
    silhouette: number,
    speed: number,
    handling: number,
    foreDefense: number,
    portDefennse: number,
    starDefense: number,
    aftDefense: number,
    armor: number,
    hullTrauma: number,
    systemStrain: number
}

export interface Vehicle {
    name: string,
    key: string,
    type: string,
    sensorRange: string,
    encum: number,
    crew: number,
    passengerCapacity: number,
    maximumAltitude: string,
    price: number,
    rarity: number,
    hp: number, 
    weapons: Weapon[],
    silhouette: number,
    speed: number,
    handling: number,
    foreDefense: number,
    aftDefense: number,
    armor: number,
    hullTrauma: number,
    systemStrain: number
}

export interface GearAttachments{
    name: string,
    category: string,
    price: number,
    encum: number,
    hp: number,
    rarity: number,
    properties: string,
    restricted: boolean
}

export interface VehicleAttachments{
    name: string,
    category: string,
    price: number,
    hp: number,
    rarity: number,
    properties: string,
    restricted: boolean
}

export enum Skills {    
    Astrogation = 'Astrogation',
    Athletics = 'Athletics',
    Brawl = 'Brawl',
    Charm = 'Charm',
    Coercion = 'Coercion',
    Computers = 'Computers',
    Cool = 'Cool',
    Coordination = 'Coordination',
    Deception = 'Deception',
    Discipline = 'Discipline',
    Gunnery = 'Gunnery',
    KnowledgeC = 'Knowledge (Core)',
    KnowledgeE = 'Knowledge (Education)',
    KnowledgeL = 'Knowledge (Lore)',
    KnowledgeOR = 'Knowledge (Outer Rim)',
    KnowledgeU = 'Knowledge (Underworld)',
    KnowledgeW = 'Knowledge (Warfare)',
    KnowledgeX = 'Knowledge (Xenology)',
    Lightsaber = 'Lightsaber',
    Leadership = 'Leadership',
    Mechanics = 'Mechanics',
    Medicine = 'Medicine',
    Melee = 'Melee',
    Negotiation = 'Negotiation',
    Perception = 'Perception',
    PilotingP = 'Piloting (Planetary)',
    PilotingS = 'Piloting (Space)',
    RangedL = 'Ranged (Light)',
    RangedH = 'Ranged (Heavy)',
    Resiliance = 'Resiliance',
    Skulduggery = 'Skulduggery',
    Stealth = 'Stealth',
    Streetwise = 'Streetwise',
    Survival = 'Survival',
    Vigilance = 'Vigilance',
}

export enum ActionType {
    Passive = 'Passive',
    Action = 'Action',
    Incidental = 'Incidental',
    Maneuver = 'Maneuver'
}

export enum WeaponCategory {
    Brawl = 'Brawl',
    Energy = 'Energy',
    Explosives = 'Explosives',
    Grenade = 'Grenade',
    Lightsaber = 'Lightsaber',
    LightsaberHilt = 'Lightsaber Hilt',
    Melee = 'Melee',
    Other = 'Other',
    PortableMissiles = 'Portable Missiles',
    Slugthrowers = 'Slugthrowers',
    Thrown = 'Thrown',
}

export enum ArmorCategory {
    Light = 'Light',
    Medium = 'Medium',
    Heavy = 'Heavy',
    Special = 'Special'
}

export enum GearCategory {
    AncientTalismans = 'Ancient Talismans',
    ChemsPoisons = 'Chems and Poisons',
    Communications = 'Communications',
    Consumables = 'Consumables',
    Cybernetics = 'Cybernetics',
    DetectionDevices = 'Detection Devices',
    Droids = 'Droids',
    Drugs = 'Drugs',
    Electronics = 'Electronics',
    FieldEquipment = 'Field Equipment',
    Medical = 'Medical',
    Poison = 'Poison',
    Recreational = 'Recreational',
    Security = 'Security',
    Storage = 'Storage',
    Survival = 'Survival',
    Tools = 'Tools',
    Uniform = 'Uniform'
}

export enum RangeBand {
    Engaged = 'engaged',
    Short = 'short',
    Medium = 'medium',
    Long = 'long',
    Extreme = 'extreme'
}