import Veiculo from './Veiculo'

class Moto extends Veiculo {
    
    private cilindradas:number

    constructor(cilindradas:number){
        super()
        this.cilindradas = cilindradas
    }

    public acelerar(): void{
        this.velocidade = this.velocidade + 20
    }
}

export default Moto