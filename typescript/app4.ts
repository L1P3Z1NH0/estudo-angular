import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

let carro = new Carro('veloster', 3);

let moto = new Moto(3)
moto.acelerar()
moto.acelerar()
carro.acelerar()

let concessionaria = new Concessionaria('',[])

console.log(moto);
console.log(carro);
console.log(concessionaria.fornecerHorarioDeFuncionamento());
