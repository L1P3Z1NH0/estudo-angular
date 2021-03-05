import { DaoInterface } from './DaoInterface'
import Moto from './Moto'

export class MotoDao implements DaoInterface {
    nomeTabela: string = 'tb_moto'

    inserir(object:Moto):boolean {
        console.log('lógica de insert');  
        return true
    }

    atualizar(object: Moto):boolean{
        console.log('lógica update');
        return true 
    }

    remover(id: number): Moto{
        console.log('lógica delete');
        return new Moto(4) 
    }

    selecionar(id:Moto): Moto{
        console.log('cuzinho azedo');
        return new Moto(5) 
    }

    selecionarTodos(): [any] {
        console.log('lógica getAll');
        return [new Moto(8) ]
    }
}