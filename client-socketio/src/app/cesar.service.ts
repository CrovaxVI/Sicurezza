
import { Injectable } from '@angular/core';
@Injectable()
export class CesarService {
    decode(toDecode:string, offset:number) : string
    {
      let cArray =Array.from(toDecode);
      let decodedArray = [];
      for (const char of cArray){
        let charCode =char.charCodeAt(0);
        let newChar = String.fromCharCode(charCode - offset)
        decodedArray.push(newChar)

      }

        return decodedArray.join("");
    }

    encode(toEncode:string, offset:number) : string
    {
  	  //Trasformo la stringa in un array di carateri
        let charArray = Array.from(toEncode);
        let encodedArray = [];
        for (const char of charArray) {
            //Estraggo da ogni carattere il codice ascii
            let charCode = char.charCodeAt(0);
            //Modifico il codice ascii e lo salvo in un carattere
            let newChar = String.fromCharCode(charCode + offset)
            encodedArray.push(newChar);
        }

        //Trasformo l'encoded array in una stringa
        return encodedArray.join('');
    }

}

