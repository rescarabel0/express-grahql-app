import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Dog')
export class Dog {
    @PrimaryColumn()
    id?: string = Date.now().toString();

    @Column()
    nome: string;

    @Column()
    raca: string;
}
