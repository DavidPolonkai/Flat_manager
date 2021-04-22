import { getRepository } from "typeorm";
import { Log } from "../entity/Log";
import { Controller } from "./Controller";

export class LogController extends Controller{
    repository = getRepository(Log);

    getPeriodicLog = async (req, res) => {
        const start = req.query.start || '';
        const end = req.query.end || '';
        try {
            const entities = await this.repository
                .createQueryBuilder('log')
                .where("log.date > :start", { start: start })
                .andWhere("log.date < :end", { end: end })
				.getMany();
            res.json(entities);
        } catch (err) {
            
            console.error(err);
            this.handleError(res);
        }
    }

    getPeriodicLogByOwner = async (req, res) => {
        const start = req.query.start || '';
        const end = req.query.end || '';
        const ownerid = req.query.ownerid || '';
        try {
            const entities = await this.repository
                .createQueryBuilder('log')
                .innerJoin('owner',"o","o.apartment=log.owner")
                .where("log.date > :start", { start: start })
                .andWhere("log.date < :end", { end: end })
                .andWhere("o.id = :ownerid", {ownerid:ownerid})
				.getMany();
            res.json(entities);
        } catch (err) {
            
            console.error(err);
            this.handleError(res);
        }
    }
}