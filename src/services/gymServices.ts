import diaryEnters from './gymEnters.json'
import  {gymEnters, omitEntry, gymEntry}  from './types'

//metods
const diaries: gymEnters[] = diaryEnters as gymEnters[]

export const getEntries = (): gymEnters[]  => diaries

export const findById = (id: number):  omitEntry | undefined =>{
    const entry = diaries.find(d => d.id === id)
    if(entry != null){
        const {age, ...restOfObject} = entry
        return restOfObject
    }
    return undefined
}

export const getEntriesMissingAny = (): omitEntry [] => {
    return diaries.map(({id, name, payment, process }) =>{
        return{
            id,
            name,
            payment,
            process
        }
    })
}
export const postEntries = (newEnter :gymEntry): gymEnters => {
    const newGymEntry ={
        id: diaryEnters.length + 1,
        ...newEnter

    }
    diaryEnters.push(newGymEntry)
    return newGymEntry
}