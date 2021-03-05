"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { ConcessionariaDao } from './ConcessionariaDao'
// import { PessoaDao } from './PessoaDao';
// import { CarroDao } from './CarroDao'
// import { MotoDao } from './MotoDao';
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Carro_1 = __importDefault(require("./Carro"));
var Moto_1 = __importDefault(require("./Moto"));
var Dao_1 = require("./Dao");
// let dao:ConcessionariaDao = new ConcessionariaDao()
// let dao2: PessoaDao = new PessoaDao()
// let dao3: CarroDao = new CarroDao()
// let dao4: MotoDao = new MotoDao()
var dao5 = new Dao_1.Dao();
var concessionariaA = new Concessionaria_1.default('', []);
dao5.inserir(concessionariaA);
var dao6 = new Dao_1.Dao();
var pessoaA = new Pessoa_1.default('', '');
dao6.atualizar(pessoaA);
var dao7 = new Dao_1.Dao();
var carroA = new Carro_1.default('', 4);
dao7.atualizar(carroA);
var dao8 = new Dao_1.Dao();
var motoA = new Moto_1.default(10);
dao8.atualizar(motoA);
