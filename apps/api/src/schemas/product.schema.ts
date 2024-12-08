import { z } from 'zod';

export const createProductSchema = z
    .object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        specs: z.array(z.string()),
    })
    .required();

/*
 * This "CreateProductDto" type is used in controller to validate
 * and enforce this specific schema and strip out un-wanted fields
 */
export type CreateProductDto = z.infer<typeof createProductSchema>;
