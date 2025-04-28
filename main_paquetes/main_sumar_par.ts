import sumar_pares from "../paquetes/suma_numeros_pares"
import * as readline from "readline/promises"

async function obtenerInputConsola(): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
      output: process.stdout,
    });
  
    try {
      const respuesta: string = await rl.question('Por favor, ingrese un numero: ');
      return respuesta;
    } finally {
      rl.close();
    }
  }

async function main(){
    const numero = await obtenerInputConsola()
    console.log(sumar_pares(parseInt(numero)))
}
main()

