import { Exclude } from "class-transformer";
import {CreateDateColumn, Entity, Column, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity('users')
 class User {
   @PrimaryColumn()
   readonly id:string

   @Column()
   name:string
   
   @Column()
   email:string
   
    @Exclude()
   @Column()
   password:string
   
   @Column()
   admin:boolean
   
   @CreateDateColumn()
   created_at:Date
   
   @UpdateDateColumn()
   update_at:Date

   constructor(){
      if(!this.id){
        this.id = uuid()
      }    
   }

}


export {User}
