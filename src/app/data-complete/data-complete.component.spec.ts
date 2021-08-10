import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApiDataJsonService } from '../api-data-json.service';

import { DataCompleteComponent } from './data-complete.component';

describe('DataCompleteComponent', () => {
    let component: DataCompleteComponent;
    let fixture: ComponentFixture<DataCompleteComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [DataCompleteComponent],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DataCompleteComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call the api service and fetch the data', () => {
        let apiData = { data: 10 }
        let service = TestBed.inject(ApiDataJsonService);
        let spy = spyOn(service,'getData').and.returnValue(of(apiData));

        fixture.detectChanges();
        
        expect(spy).toHaveBeenCalled;
        expect(component.jsonData).toEqual(apiData);
    })
});
