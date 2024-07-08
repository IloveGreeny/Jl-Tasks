import {getScore} from "../app/script";
import {Stamp} from "../app/script";

describe('getScore function', () => {
    it('returns the score of the stamp with the exact offset', () => {
        const gameStamps: Stamp[] = [
            { offset: 1, score: { home: 0, away: 0 } },
            { offset: 2, score: { home: 1, away: 0 } },
            { offset: 3, score: { home: 1, away: 1 } },
        ];
        const offset = 2;
        const expectedScore = { home: 1, away: 0 };
        expect(getScore(gameStamps, offset)).toEqual(expectedScore);
    });

    it('returns the score of the last stamp if no stamp has a greater offset', () => {
        const gameStamps: Stamp[] = [
            { offset: 1, score: { home: 0, away: 0 } },
            { offset: 2, score: { home: 1, away: 0 } },
            { offset: 3, score: { home: 1, away: 1 } },
        ];
        const offset = 4;
        const expectedScore = { home: 1, away: 1 };
        expect(getScore(gameStamps, offset)).toEqual(expectedScore);
    });

    it('returns the score of the first stamp if the offset is less than the first stamp', () => {
        const gameStamps: Stamp[] = [
            { offset: 1, score: { home: 0, away: 0 } },
            { offset: 2, score: { home: 1, away: 0 } },
            { offset: 3, score: { home: 1, away: 1 } },
        ];
        const offset = 0;
        const expectedScore = { home: 0, away: 0 };
        expect(getScore(gameStamps, offset)).toEqual(expectedScore);
    });

    it('returns undefined if the gameStamps array is empty', () => {
        const gameStamps: Stamp[] = [];
        const offset = 1;
        expect(getScore(gameStamps, offset)).toBeUndefined();
    });
});