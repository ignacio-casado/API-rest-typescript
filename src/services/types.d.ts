export type process = 'chest' | 'shoulders' | 'back' | 'legs'

export interface gymEnters {
    id: number,
    name: string,
    age: number,
    payment: boolean,
    process: process

}