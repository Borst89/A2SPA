﻿import { Component, OnInit } from '@angular/core';
import { SampleDataService } from './services/sampleData.service';
import { TestData } from './models/testData';

@Component({
    selector: 'my-about2',
    templateUrl: '/areas/about/partial/about2Component'
})

export class About2Component implements OnInit {
    testData: TestData;
    errorMessage: string;

    constructor(private sampleDataService: SampleDataService) { }

    ngOnInit() {
        this.getTestData();
    }

    getTestData() {
        this.sampleDataService.getSampleData()
            .subscribe((data: TestData) => this.testData = data,
            error => this.errorMessage = <any>error);
    }

    addTestData(event: Event):void {
        event.preventDefault();
        if (!this.testData) { return; }
        this.sampleDataService.addSampleData(this.testData)
            .subscribe((data: TestData) => this.testData = data,
            error => this.errorMessage = <any>error);
    }
}