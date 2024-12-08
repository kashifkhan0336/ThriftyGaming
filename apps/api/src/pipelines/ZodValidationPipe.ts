/*
 * The schemas are used in ValdiationPipelines for validating
 * incoming request payload, much like hapi/joi schema
 * Here, I am using Zod since it was used in NestJs docs xd
 *
 * The validation could be done in many ways, through middleware
 * or creating other methods that validate the payload. But
 * to not violate SRP and DRY principles, Nest provides ValidationPipelines
 * for this sole purpose
 *
 * Here we have created a custom validation pipeline that takes in
 * a zod schema and outputs results
 */

import {
    PipeTransform,
    ArgumentMetadata,
    BadRequestException,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
    constructor(private schema: ZodSchema) {}

    transform(value: any, metadata: ArgumentMetadata) {
        try {
            const parsed = this.schema.parse(value);
            return parsed;
        } catch (error) {
            throw new BadRequestException('Validation failed');
        }
    }
}
