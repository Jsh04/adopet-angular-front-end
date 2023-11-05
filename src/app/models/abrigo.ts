import { Endereco } from "./endereco";
import { Pet } from "./pet";

export class Abrigo {
    nome: string = ''
    endereco: Endereco = new Endereco()
    pets: Pet[] = []
    constructor(){}
}
