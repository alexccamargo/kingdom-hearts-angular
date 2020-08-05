export class SharedFunctions {
    static getCharacters(chars: string): string {
        const result = [];
        if (chars.includes('A')) {
            result.push('Aqua');
        }

        if (chars.includes('T')) {
            result.push('Terra');
        }

        if (chars.includes('V')) {
            result.push('Ventus');
        }

        return result.join(' - ');
    }
}