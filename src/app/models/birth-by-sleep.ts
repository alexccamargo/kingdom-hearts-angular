export interface CommandType {
    name: string;
    chars: string;
    melding: MeldingType[];
}

export interface MeldingType {
    firstItem: string;
    secondItem: string;
    percent: string;
    crystalEffect: any;
}
