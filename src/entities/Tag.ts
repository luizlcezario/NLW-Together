import {CreateDateColumn, Entity, Column, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from 'uuid'
import {Expose} from 'class-transformer'
@Entity('tags')
 class Tag {
   @PrimaryColumn()
   readonly id:string
  
   @Column()
   name:string
   
   @CreateDateColumn()
   created_at:Date
   
   @UpdateDateColumn()
   update_at:Date

   @Expose({name:'nameCustom'})
   nameCustom():string{
     return `#${this.name}`
   }

   constructor(){
      if(!this.id){
        this.id = uuid()
      }    
   }

}


export {Tag}
