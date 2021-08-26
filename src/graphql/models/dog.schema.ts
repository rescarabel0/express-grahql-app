import 'reflect-metadata';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class DogSchema {
    @Field((type) => ID, { nullable: true })
    id?: string;

    @Field()
    nome: string;

    @Field()
    raca: string;
}
