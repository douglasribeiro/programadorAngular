import { Comentario } from '../comentario/comentario';

export class Interprete {
    id: number;
    nome: String;
    mi_fk: number;
    comentario: [Comentario];
}
