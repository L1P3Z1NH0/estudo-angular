// import { ConcessionariaDao } from './ConcessionariaDao'
// import { PessoaDao } from './PessoaDao';
// import { CarroDao } from './CarroDao'
// import { MotoDao } from './MotoDao';
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa';
import Carro from './Carro';
import Moto from './Moto';
import { Dao } from './Dao';

// let dao:ConcessionariaDao = new ConcessionariaDao()
// let dao2: PessoaDao = new PessoaDao()
// let dao3: CarroDao = new CarroDao()
// let dao4: MotoDao = new MotoDao()

let dao5: Dao<Concessionaria> = new Dao<Concessionaria>();
let concessionariaA = new Concessionaria('',[]);

dao5.inserir(concessionariaA)

let dao6: Dao<Pessoa> = new Dao<Pessoa>()
let pessoaA: Pessoa = new Pessoa('','')

dao6.atualizar(pessoaA)

let dao7: Dao<Carro> = new Dao<Carro>()
let carroA: Carro = new Carro('',4)

dao7.atualizar(carroA)

let dao8: Dao<Moto> = new Dao<Moto>()
let motoA: Moto = new Moto(10)

dao8.atualizar(motoA)



