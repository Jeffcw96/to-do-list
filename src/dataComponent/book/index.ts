import find from "./find";
import create from "./create";
import aggregate from './aggregate'
import updateMany from "./updateMany";
import updateOne from "./updateOne";
import findOne from "./findOne";
import deleteOne from './deleteOne'

export default{
    find:find,
    findOne:findOne,
    create:create,
    aggregate:aggregate,
    updateOne: updateOne,
    updateMany: updateMany,
    deleteOne:deleteOne
}