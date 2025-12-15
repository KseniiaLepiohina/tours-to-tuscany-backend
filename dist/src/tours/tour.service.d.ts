import { DataSource, Repository } from 'typeorm';
import { Tour } from './entity/tour.entity';
export declare class TourService {
    private readonly tourRepository;
    private readonly dataSource;
    constructor(tourRepository: Repository<Tour>, dataSource: DataSource);
    findAllTours(): Promise<Tour[]>;
    findTourById(id: number): Promise<Tour>;
}
