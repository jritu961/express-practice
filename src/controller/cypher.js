    import {createCipheriv,randomBytes,createDecipheriv} from "crypto"


   
    const key=randomBytes(32)
    const iv=randomBytes(16)
    const encryptcypher=(input)=>{
        const cipher=createCipheriv("aes256",key,iv)
        const cypherMessage=cipher.update(input,"utf8","hex")+cipher.final("hex")
        return cypherMessage
    }

    const data=encryptcypher("hello")
    console.log(data)


    const decryptMessage=(data)=>{
        const cipher=createDecipheriv("aes256",key,iv)
        const decryptedMessage=cipher.update(data,"hex","utf8")+cipher.final("utf8")
        return decryptedMessage
    }

    const decrptData=decryptMessage(data)
    console.log(decrptData)