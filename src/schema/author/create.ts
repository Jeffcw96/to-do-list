import {number, object, string} from 'yup'

export interface AuthorInterface{
    name: string;
    age: number;
    country:number;
}

export default object({
    body:object({
        name:string().required('Name is required'),
        age: number().required('Age is required'),
        country:string().required('Country is required').min(2)
    })
})