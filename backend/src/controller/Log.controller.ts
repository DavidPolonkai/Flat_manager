import { Between, getRepository, MoreThan } from "typeorm";
import { Log } from "../entity/Log";
import { Controller } from "./Controller";

export class LogController extends Controller{
    repository = getRepository(Log);



    getPeriodicLog = async (req, res) => {
        const startDate = req.params.startDate;
        const endDate = req.params.endDate;
        try {
            const entities = await this.repository.find({
                where: {
                    date: Between(startDate, endDate)
                },
                order: {
                    date: 'ASC'
                }
            });
            console.log(entities);
            res.json(entities);
        } catch (err) {
            
            console.error(err);
            this.handleError(res);
        }
    }

    getPeriodicLogByOwner = async (req, res) => {
        const start = req.params.startDate || '';
        const end = req.params.endDate || '';
        const ownerid = req.params.ownerId || '';
        console.log(ownerid);
        try {
            const entities = await this.repository.find({
                where: {
                    date: Between(start, end),
                    owner: ownerid
                },
                order: {
                    date: 'ASC'
                }
            });
            res.json(entities);
        } catch (err) {
            console.error(err);
            this.handleError(res);
        }
    }


}