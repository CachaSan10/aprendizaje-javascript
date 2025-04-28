function sumar_pares(numero: number){
    var suma = 0
    for (let i = 0; i<= numero; i++){
        if (i%2 == 0){
            suma+=i
        }
    }
    return suma
}

export default sumar_pares