import { Injectable } from '@angular/core';

// Statics & Domains
import { FishMemoryDomain } from '../typing/domains';
import FMStatistic = FishMemoryDomain.FMStatistic;

@Injectable()
export class FMStatisticsService {

    constructor() { }

    public add(statistic: FMStatistic) {
        console.log(': )');
    }
}