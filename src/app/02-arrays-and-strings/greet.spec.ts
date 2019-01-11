import { greet } from './greet';

describe('greet', () => {
    it('should include the input string in the output message', () => {
        const result = greet('Guardians of the Galaxy');

        expect(result).toContain('Guardians of the Galaxy');
    });
});
