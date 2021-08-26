import { InputType, Field, ID } from 'type-graphql';

@InputType()
class DogInput {
    @Field()
    nome: string;

    @Field()
    raca: string;
}

export default DogInput;
