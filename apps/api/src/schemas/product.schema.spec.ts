import { ZodError } from 'zod';
import { createProductSchema } from './product.schema';

describe('Create product schema', () => {
    const malformedData = {
        id: 111,
        title: 'Product 1',
        description: 'Description of product 1',
        specs: [],
        stars: 5,
        image: 'https://exampe.com/image.png',
    };

    const validData = {
        title: 'Product 1',
        description: 'Description of product 1',
        specs: [],
        image: 'https://exampe.com/image.png',
    };

    const incompleteData = {
        description: 'Description of product 1',
        specs: [],
        image: 'https://exampe.com/image.png',
    };

    const invalidData = {
        title: 9832131,
        description: 'Description of product 1',
        specs: [],
        image: 'https://exampe.com/image.png',
    };

    it('should filter out un-wanted fields', () => {
        expect(createProductSchema.parse(malformedData)).toStrictEqual(
            validData,
        );
    });

    it('should throw error on incomplete data', () => {
        expect(() => createProductSchema.parse(incompleteData)).toThrow(
            ZodError,
        );
    });

    it('should throw error on invalid data types of fields', () => {
        expect(() => createProductSchema.parse(invalidData)).toThrow(ZodError);
    });

    // TODO: write tests for cases like:
    // 1. Is title 6 characters long minimum
    // 2. Is image a valid URL
    // etc...
});
