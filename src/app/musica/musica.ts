import { Interprete } from '../interprete/interprete';
import { Album } from '../album/album';

export class Musica {
    id: number;
    nome: string;
    tempo: Date;
    intro: Date;
    anoLancamento: string;
    interprete: [Interprete];
    album: [Album];
}
