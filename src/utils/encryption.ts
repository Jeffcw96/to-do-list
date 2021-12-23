import crypto from 'crypto'
const masterKey = "12345678901234567890123456789012"; // To be changed; 32byte
const initVector = "1234567890123456"; // To be changed; 16byte
const algorithm = "aes-256-cbc"; 
let enc = {
    
    /**
     * Encrypts text by given key
     * @param String text to encrypt
     * @param Buffer masterkey
     * @returns String encrypted text, base64 encoded
     */
    encrypt: function(text:string){
        console.log("master key", masterKey, typeof masterKey)
        if(typeof masterKey !== 'string') return
        console.log("start here lo wei")
        //random initialization vector
        const iv = crypto.randomBytes(16)

        //random salt
        const salt = crypto.randomBytes(64)
        let key = Buffer.from(masterKey,'hex')

        // AES 256 GCM Mode
        const cipher = crypto.createCipheriv('aes-256-gcm',key,iv)

        //encrypt the given text
        const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()])

        // extract the auth tag
        const tag = cipher.getAuthTag()

        // generate output
        return Buffer.concat([iv,encrypted,tag]).toString('base64')
        
    },

    /**
     * Decrypts text by given key
     * @param String base64 encoded input data
     * @param Buffer master
     * @returns String decrpted (original) text
     */
    decrypt: function (encdata:string){
        console.log("encData",encdata)
        if(typeof masterKey !== 'string') return

        //base64 decoding
        const bData = Buffer.from(encdata,'base64')

        //convert data to buffers
        const iv = bData.slice(0,16)
        const tag = bData.slice(bData.length - 16)
        const text = bData.slice(16, bData.length - 16)

        console.log("texttt",text)
        //derive key using 32 byte key length
        let key = Buffer.from(masterKey,'hex');

        //AES 256 GCM Mode
        const decipher = crypto.createDecipheriv('aes-256-gcm',key,iv)
        decipher.setAuthTag(tag)

        //decrypt the given text
        const decrypted = decipher.update(text.toString(),'binary','utf8') + decipher.final('utf8');

        return decrypted

    }
}

let binaryEnc = {
    encrypt: function(text:string){
        let result = enc.encrypt(text)
        if(!result) return
        return Buffer.from(result, 'base64')
    },
    decrypt: function(bufferInput:Buffer){
        if(!bufferInput)
            return bufferInput

        try {
            let input = bufferInput.toString('base64')
            return enc.decrypt(input)
        } catch (error) {
            return bufferInput.toString()
        }
    }
}

let securedData = {
    encrypt: (text:string) => {
        const cipher = crypto.createCipheriv(algorithm, masterKey, initVector);

        let encryptedData = cipher.update(text, "utf-8", "hex") + cipher.final("hex");

        return encryptedData
    },

    decrypt: (encryptedData:string) => {
        const decipher = crypto.createDecipheriv(algorithm, masterKey, initVector);

        let decryptedData = decipher.update(encryptedData, "hex", "utf-8") + decipher.final("utf8");
        
        return decryptedData 
    }
}



export const encryptionBuffer = (text:string) =>{
    const encryptedText = securedData.encrypt(text)
    return Buffer.from(encryptedText, 'utf-8')
}

export const decryptionBuffer = (binary:Buffer) =>{
    const encryptedText = binary.toString()
    const decrptedText = securedData.decrypt(encryptedText)

    return decrptedText
}

export const encrypt = enc.encrypt
export const decrypt= enc.decrypt
export const binEncrypt= binaryEnc.encrypt
export const binDecrypt= binaryEnc.decrypt
