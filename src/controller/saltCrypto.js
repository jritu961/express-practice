//using salt in hast we enter some random byte each time so that the hash that will be created it will not be mached with the original hash



import {createHash,randomBytes} from "crypto"

const hashPasswordWithSalt=(input)=>{
    const salt=randomBytes(64).toString("hex")
    const hashedPassword=createHash("sha256").update(input+salt).digest("hex")
    return {salt,hashedPassword}
}

const salt1=hashPasswordWithSalt('123')
const salt2=hashPasswordWithSalt('123')
//  console.log(salt1)
//  console.log(salt2)

 const verifyPasswordWithSalt = (enteredPassword, storedSalt, storedHashedPassword) => {
    const hashedPasswordToCheck = createHash('sha256').update(enteredPassword + storedSalt).digest('hex');
    console.log(hashedPasswordToCheck,storedHashedPassword)
    return hashedPasswordToCheck === storedHashedPassword;
}

// Example usage
const { salt, hashedPassword } = hashPasswordWithSalt("user123");


const enteredPassword = "user123";
const isPasswordValid = verifyPasswordWithSalt(enteredPassword, salt, hashedPassword);
console.log("Is Password Valid?", isPasswordValid);


// but if we want to decrypt the encrypted date hash salt will not work that is why encrption came