import { DaoInterface } from './DaoInterface'
import Carro from './Carro'

export class CarroDao implements DaoInterface {
    nomeTabela:string = 'tb_carro'

    inserir(object:Carro):boolean{
        console.log('Comi o cu da tia');
        return true
    }

    atualizar(object:Carro):boolean{
        console.log('Comi o cu do tio');
        return true
    }

    remover(id:number):Carro{
        console.log('Comi seu cu no uno');
        return new Carro('',4)
    }

    selecionar(id:number):Carro{
        console.log('Por favor coma meu cu');
        return new Carro('',2)
    }

    selecionarTodos():[any]{
        console.log('Bagunça uhuuu');
        return [new Carro('',6)]
    }
}