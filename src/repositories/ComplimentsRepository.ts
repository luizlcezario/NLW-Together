import { EntityRepository, Repository } from "typeorm";
import { Compliments } from "../entities/Compliments";

@EntityRepository(Compliments)
class ComplimentsRepository extends Repository<Compliments>{ }


export { ComplimentsRepository }
