// export type Process = 'chest' | 'shoulders' | 'back' | 'legs'
export enum Process  {
    Chest = 'chest',
    Shoulders = 'shoulders',
    Back = 'back',
    Legs = 'legs'

}
export interface gymEnters {
    id: number,
    name: string,
    age: number,
    payment: boolean,
    process: Process

}

export type omitEntry = Omit<gymEnters, 'age'>
export type gymEntry = Omit<gymEnters, 'id'>