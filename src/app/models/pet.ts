import { Abrigo } from "./abrigo";

export class Pet {

    id: number = 0
    nome: string = ''
    descricao: string = ''
    adotado: boolean = false
    idade: string = ''
    imagem: string = ''
    abrigo: Abrigo = new Abrigo()

    constructor(){}


}
