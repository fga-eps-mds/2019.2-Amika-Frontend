export class Grupo {
    public id: number;
    public nome: string;
}

export interface Grupo {
    id: number; 
    nome: string;
  }

  let grupo: Grupo[] = [
    {
      id: 56,
      nome: 'Grupo 1'
    },
    {
      id: 175,
      nome: 'Grupo 2'
    },
    {
        id: 12,
        nome: 'Grupo 3'
    }
  ];
