import { Testimonial } from './entities/testimonial.entity';
import { DataSource, Repository } from 'typeorm';
export declare class TestimonialsService {
    private testimonialRepository;
    private readonly dataSource;
    constructor(testimonialRepository: Repository<Testimonial>, dataSource: DataSource);
    findAll(): Promise<Testimonial[]>;
    findOne(tour_id: number): Promise<any[]>;
}
