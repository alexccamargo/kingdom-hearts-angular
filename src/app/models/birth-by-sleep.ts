export interface CommandType {
    name: string;
    chars: string;
    favorite: boolean;
    melding: MeldingType[];
}

export interface MeldingType {
    firstItem: string;
    secondItem: string;
    percent: string;
    crystalEffect: any;
}
