import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateComplimets1624557182866 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"compliments",
                columns: [
                    {
                        name:'id',
                        type:"uuid",
                        isPrimary:true,
                    },
                    {
                        name:"user_sender",
                        type:"varchar"
                    },
                    {
                        name:"user_receiver",
                        type:"varchar"
                    },
                    {
                        name:"tag_id",
                        type:"uuid"
                    },
                    {
                        name:"message",
                        type:"varchar"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    },
                    
                ],
                foreignKeys:[
                    {
                        name:"FKUserSenderCompliments",
                        referencedTableName:"users",
                        referencedColumnNames:["id"],
                        columnNames:["user_sender"],
                        onDelete: "Set Null",
                        onUpdate:"Set Null"
                    },
                    {
                        name:"FKUserReciverCompliments",
                        referencedTableName:"users",
                        referencedColumnNames:["id"],
                        columnNames:["user_sender"],
                        onDelete: "Set Null",
                        onUpdate:"Set Null"
                    },
                    {
                        name:"FKUserSenderCompliments",
                        referencedTableName:"users",
                        referencedColumnNames:["id"],
                        columnNames:["user_receiver"],
                        onDelete: "Set Null",
                        onUpdate:"Set Null"
                    },
                    {
                        name:"FKTagCompliments",
                        referencedTableName:"tags",
                        referencedColumnNames:["id"],
                        columnNames:["tag_id"],
                        onDelete: "Set Null",
                        onUpdate:"Set Null"
                    },
                ]
            })
        )
        // await queryRunner.createForeignKey(
        //     "compliments",
        //     new TableForeignKey({
        //         name:"FKUserSenderCompliments",
        //         referencedTableName:"users",
        //         referencedColumnNames:["id"],
        //         columnNames:["user_sender"],
        //         onDelete: "Set Null",
        //         onUpdate:"Set Null"
        //     })
        // )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments")
    }

}
