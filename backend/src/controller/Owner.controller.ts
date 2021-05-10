import { getRepository } from "typeorm";
import { Controller } from "./Controller";
import { Owner } from "../entity/Owner"


export class OwnerController extends Controller{
    repository = getRepository(Owner);


    
    create = async (req, res) => {
        const owner: Owner = req.body
        const entity = this.repository.create(req.body);
        console.log(owner);
        try {
            this.disOwn(owner);
            const entityAdded = await this.repository.save(entity);
            res.json(entityAdded);
        } catch (err) {
            console.error(err);
            this.handleError(res);
        };
        
    };

    getOldOwnerDebit = async (req, res) => {
        try {
            const id: number = req.params.id;
            let balance;
            const oldOwner = await this.repository.createQueryBuilder("owner")
                .where("apartmentId = :id", { id:id })
                .andWhere("active = 1")
                .getOne();
            if (!oldOwner) {
               balance = 0;
            }

            else {
                balance = oldOwner.balance;
            }
            res.json({ balance });
        } catch (err) {
            console.error(err);
            this.handleError(res);
        };
        
    };

    getOne = async (req, res) => {
        try {
            const id = req.params.id;
            const entity = await this.repository.findOne(id);

            if (!entity) {
                this.handleError(res, 404, 'No entity found');
                return;
            }
            res.json({ entity });
        }catch(err){
            console.error(err);
            this.handleError(res);
        }
    }

    private async disOwn(owner:Owner) {
        await this.repository
        .createQueryBuilder()
        .update(Owner)
        .set({ active: false })
        .where("active = 1 and apartmentId = :apartmentid", { apartmentid: owner.apartment.id})
        .execute();
    }


    getAllActiveAndApartment = async (req, res) => {
        try {
            const entities = await this.repository.createQueryBuilder("owner")
            .leftJoinAndMapOne("owner.apartment", "owner.apartment","apartment", "apartment.id=owner.apartmentId")
            .where("owner.active=1")
            .getMany();
            res.json(entities);
        }catch(err){
            console.error(err);
            this.handleError(res);
        }
    }

    updateBalance = async (req, res) => {
        const owner = req.body || '';
        try {
            let entity = await this.repository
                .createQueryBuilder('owner')
                .update()
                .set({ balance: owner.balance })
                .where("id = :id", { id: owner.id })
               .execute()
            res.json(entity);
        } catch (err) {
            console.error(err);
            this.handleError(res);
        }
    }


}