import { Abrigo } from "./abrigo";
import { Endereco } from "./endereco";
export class Pet {

    id: number = 0
    nome: string = ''
    descricao: string = ''
    adotado: boolean = false
    idade: string = ''
    imagem: string = ''
    abrigo: Abrigo = new Abrigo();
    abrigoId: string = ""
    endereco: Endereco = new Endereco();

    constructor(){}


}
