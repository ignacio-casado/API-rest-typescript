import {gymEntry} from '../services/types'

const parseAge = (ageFromRequest: any): string =>{
    if(typeof ageFromRequest != 'string'){
        throw new Error ('Incorrect or missing comments')
    }
    return ageFromRequest
}
const toNewGymEntry = () =>{
    const newEntry: gymEntry = {
        age:parseAge(Object.age)
    }
}
export default toNewGymEntry