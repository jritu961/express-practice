// Hash functions, such as SHA-256, are designed to be one-way functions, meaning that they are computationally infeasible to reverse. As a result, you cannot "decrypt" hash data. The purpose of hashing is to securely store and verify data integrity, especially for sensitive information like passwords.
//SHA-256 takes an input message and produces a fixed-size 256-bit (32-byte) hash value
import { createHash } from "crypto";

export const createHashController = (input) => {
  return createHash("sha256").update(input).digest("hex");
};
let password = "123";
let password2 = "123";
//PROBLEM::::both hases are same so it is easy to predict
let hash1 = createHashController(password);
console.log(hash1);
let hash2 = createHashController(password2);
console.log(hash2);

