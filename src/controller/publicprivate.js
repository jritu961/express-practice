import * as crypto from 'crypto';

// Step 1: Key Pair Generation
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
});

// Step 2: Encryption
const plaintextMessage = Buffer.from('Hello, world!', 'utf-8');
const encryptedMessage = crypto.publicEncrypt(publicKey, plaintextMessage);
console.log('Encrypted Message:', encryptedMessage.toString('base64'));

// Step 3: Decryption
const decryptedMessage = crypto.privateDecrypt(privateKey, encryptedMessage);
console.log('Decrypted Message:', decryptedMessage.toString('utf-8'));
