import { Dog } from './model/dog.entity';
import { DogSchema } from './../../graphql/models/dog.schema';
import 'reflect-metadata';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { getConnection } from 'typeorm';
import DogInput from './../../graphql/models/dogInput.schema';

@Resolver((of) => DogSchema)
class DogsResolver {
    constructor() {}

    @Query((returns) => [DogSchema], { nullable: false })
    async dogs(): Promise<DogSchema[]> {
        return await getConnection().getRepository(Dog).find();
    }

    @Mutation((returns) => DogSchema)
    async addDog(@Arg('newDogData') newDogData: DogInput) {
        const newDog = getConnection().getRepository(Dog).create(newDogData);

        return getConnection().getRepository(Dog).save(newDog);
    }
}

export default DogsResolver;
