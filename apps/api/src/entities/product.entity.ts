/*
 * Entities are used to define database tables and columns
 * Other than that, they don't have any other use-case
 * (according to my current knowledge of NestJs)
 */

import { Entity, Property, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Product {
    @PrimaryKey()
    id!: number;

    @Property()
    title!: string;

    @Property()
    description!: string;

    @Property()
    image!: string;

    @Property()
    specs!: string[];

    @Property()
    stars!: number;
}
