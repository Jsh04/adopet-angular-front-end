import { Endereco } from "./endereco";
import { Pet } from "./pet";

export class Abrigo {
    name: string = ''
    email: string = ''
    senha: string = ''
    endereco: Endereco = new Endereco()
    pets: Pet[] = []
    constructor(){}
}
