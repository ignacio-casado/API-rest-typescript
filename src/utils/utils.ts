import {gymEntry, Process} from '../services/types'

const parseAge = (ageFromRequest: any): number =>{
    if(!isNumber(ageFromRequest)){
        throw new Error ('Incorrect or missing comments')
    }
    return ageFromRequest
}
const parseName = (nameFromRequest: any): string =>{
    if(!isString(nameFromRequest)){
        throw new Error('Name must be a string')
    }
    return nameFromRequest
}
const parsePayment = (paymentFromRequest:any): boolean =>{
    if(!isTrue(paymentFromRequest)){
        throw new Error('Must be a boolean')
    }
    return paymentFromRequest
}
const parseProcess = (processFromRequest: any): Process =>{
    if(!isProcess(processFromRequest) || !isString(processFromRequest)){
        throw new Error('Must be a type of process(4)')
    }
    return processFromRequest
}
//
const isProcess = (param: any): boolean =>{
    return Object.values(Process).includes(param)
}

const isTrue = (boolean: boolean): boolean =>{
    return typeof boolean === 'boolean'
}

const isNumber = (number: number): boolean =>{
    return typeof number === 'number'
}

const isString = (string: string): boolean  =>{
    return typeof string === 'string'

}

const toNewGymEntry = (object: any) =>{
    const newEntry: gymEntry = {
        name:parseName(object.name),
        age:parseAge(object.age),
        payment:parsePayment(object.payment),
        process:parseProcess(object.process)
    }
    return newEntry
}
export default toNewGymEntry