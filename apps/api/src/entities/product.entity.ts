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
