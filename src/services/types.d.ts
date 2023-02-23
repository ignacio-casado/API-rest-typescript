export type Process = 'chest' | 'shoulders' | 'back' | 'legs'

export interface gymEnters {
    id: number,
    name: string,
    age: number,
    payment: boolean,
    process: process

}

export type omitEntry = Omit<gymEnters, 'age'>
export type gymEntry = Omit<gymEnters, 'id'>