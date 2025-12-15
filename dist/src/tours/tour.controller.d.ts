import { TourService } from './tour.service';
export declare class TourController {
    private readonly tourService;
    constructor(tourService: TourService);
    findAll(): Promise<import("./entity/tour.entity").Tour[]>;
    findById(id: string): Promise<import("./entity/tour.entity").Tour>;
}
