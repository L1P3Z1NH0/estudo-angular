"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarroDao = void 0;
var Carro_1 = __importDefault(require("./Carro"));
var CarroDao = /** @class */ (function () {
    function CarroDao() {
        this.nomeTabela = 'tb_carro';
    }
    CarroDao.prototype.inserir = function (object) {
        console.log('Comi o cu da tia');
        return true;
    };
    CarroDao.prototype.atualizar = function (object) {
        console.log('Comi o cu do tio');
        return true;
    };
    CarroDao.prototype.remover = function (id) {
        console.log('Comi seu cu no uno');
        return new Carro_1.default('', 4);
    };
    CarroDao.prototype.selecionar = function (id) {
        console.log('Por favor coma meu cu');
        return new Carro_1.default('', 2);
    };
    CarroDao.prototype.selecionarTodos = function () {
        console.log('Bagunça uhuuu');
        return [new Carro_1.default('', 6)];
    };
    return CarroDao;
}());
exports.CarroDao = CarroDao;
