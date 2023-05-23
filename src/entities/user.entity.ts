import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}

export default UserEntity;
