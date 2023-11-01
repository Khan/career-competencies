import { describe, expect, it } from "vitest";

import { Matrix } from '.';
import type { Competencies } from './competencies';
import type { Expectations } from './expectations';
import { Skills } from './skills';

describe('Matrix function', () => {
    it('should return an object with byCompetency and byExpectation properties', () => {
        const result = Matrix();

        expect(result).toHaveProperty('byCompetency');
        expect(result).toHaveProperty('byExpectation');
    });

    it('should filter competencies and expectations by "Core" track', () => {
        const track = 'Core';
        const result = Matrix(track);

        //expect result legth to be 5
        expect(result.byCompetency.length).toBe(5);

        result.byCompetency.forEach((competency: Competencies) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            expect(competency.track).toBe(track);
        });

        result.byExpectation.forEach((expectation: Expectations) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            expect(expectation.competencies.every((competency: Competencies) => competency.track === track)).toBe(true);
        });
    });

    it('should filter competencies and expectations by "Software Engineer" track', () => {
        const track = 'Software Engineer';
        const result = Matrix(track);

        //expect result legth to be 6 (5 core + 1 software engineer)
        expect(result.byCompetency.length).toBe(6);
        expect(result.byCompetency[4].track).toBe("Core");
        expect(result.byCompetency[5].title).toBe("Domain Expertise");
        expect(result.byCompetency[5].track).toBe(track);

    });
});