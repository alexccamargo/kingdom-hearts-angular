import { idText } from 'typescript';
export interface CommandTypeId {
    id: string,
    name: string,
}

export interface CommandType {
    id: string; 
    name: string;
    chars: string;
    favorite: boolean;
    melding: MeldingType[];
    ingredientFor?: CommandTypeId[];
}

export interface MeldingType {
    firstItem: CommandTypeId;
    secondItem: CommandTypeId;
    percent: string;
    crystalEffect: any;
}
