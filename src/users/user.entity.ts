import {
    BaseEntity,
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import * as argon2 from 'argon2';
  
  @Entity()
  export class User extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    password: string;
  
    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
  
    @BeforeInsert()
    async hashPassword() {
      this.password = await argon2.hash(this.password);
    }
  
    async validatePassword(password: string): Promise<boolean> {
      return argon2.verify(password, this.password);
    }
  }