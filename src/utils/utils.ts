import {gymEntry} from '../services/types'

const parseAge = (ageFromRequest: any): string =>{
    if(typeof ageFromRequest != 'string'){
        throw new Error ('Incorrect or missing comments')
    }
}
const toNewGymEntry = () =>{
    const newEntry: gymEntry = {

    }
}
export default toNewGymEntry