import { Router } from 'express';
import { ApartmentController } from './src/controller/Apartment.controller';
import { LogController } from './src/controller/Log.controller';
import { OwnerController } from './src/controller/Owner.controller';


export function getRouter() {
    const router = Router();

    const apartmentController = new ApartmentController();
    const logController = new LogController();
    const ownerController = new OwnerController();

    router.get('/owners', ownerController.getAll);
    router.get('/owners/old/:id', ownerController.getOldOwnerDebit);
    router.get('/ownersandapartment/active',ownerController.getAllActiveAndApartment)
    router.get('/owners/:id', ownerController.getOne);
    router.post('/owners', ownerController.create);
    router.put('/owners', ownerController.update);
    router.delete('/owners/:id', ownerController.delete);
    router.put('/owners/balance', ownerController.updateBalance);

    router.get('/logs', logController.getAll);
    router.get('/logs/:startDate&:endDate&:ownerId', logController.getPeriodicLogByOwner);
    router.get('/logs/:startDate&:endDate', logController.getPeriodicLog);
    router.get('/logs/:id', logController.getOne);
    router.post('/logs', logController.create);
    router.put('/logs', logController.update);
    router.delete('/logs/:id', logController.delete);


    router.get('/apartments', apartmentController.getAll);
    router.get('/apartments/inuse', apartmentController.getInUse);
    router.get('/apartments/:id', apartmentController.getOne);
    router.post('/apartments', apartmentController.create);
    router.put('/apartments', apartmentController.update);
    router.delete('/apartments/:id', apartmentController.delete);

    return router;
}
