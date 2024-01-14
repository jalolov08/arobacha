import CryptoJS from 'react-native-crypto-js';
import {CRYPTO_SECRET} from '../../config';

function decryptData(encryptedData: string): any {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, CRYPTO_SECRET);
  const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedData);
}

export {decryptData};
