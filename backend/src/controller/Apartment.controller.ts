import { getRepository } from "typeorm";
import { Apartment } from "../entity/Apartment";
import { Controller } from "./Controller";

export class ApartmentController extends Controller{
    repository = getRepository(Apartment);

    getInUse = async (req, res) => {
        try {
            const entities = await this.repository
                .createQueryBuilder()
                .select("apartment")
                .from(Apartment,"apartment")
                .innerJoin('owner', "o", "o.apartmentId=apartment.id")
                .where("o.active=1")
                .getMany();
            res.json(entities);
        } catch (err) {
            
            console.error(err);
            this.handleError(res);
        }
    }

}