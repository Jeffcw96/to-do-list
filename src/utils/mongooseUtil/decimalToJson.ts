export default function decimalToJson(v:object,i:any = null,prev:any = null){
    if(v !== null && typeof v === "object"){
        if(v.constructor.name === "Decimal128") prev[i] = v.toString();
        else Object.entries(v).forEach(([key,value]:[any,any])=> decimalToJson(value,key,prev ? prev[i] : v))
    }
}