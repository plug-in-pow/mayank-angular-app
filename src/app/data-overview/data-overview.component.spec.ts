import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { ApiDataJsonService } from '../api-data-json.service';
import { DataOverviewComponent } from './data-overview.component';

class RouterStub {
    navigate(parmas: any) { }
}

class ActivatedRouteStub {
    private subject = new Subject();

    push(value: any) {
        return this.subject.next(value);
    }

    get parmas() {
        return this.subject.asObservable();
    }
}

describe('DataOverviewComponent', () => {
    let component: DataOverviewComponent;
    let fixture: ComponentFixture<DataOverviewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [DataOverviewComponent],
            providers: [
                { provide: Router, useClass: RouterStub },
                { provide: ActivatedRoute, useClass: ActivatedRouteStub },
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DataOverviewComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call the api service to get the data and then called the filter method', () => {
        let apiData = { id: 10 }
        let service = TestBed.inject(ApiDataJsonService);
        let spyComponent = spyOn(component,'filterDataOnId');
        let spyService = spyOn(service,'getData').and.returnValue(of(apiData));

        component.setDataFromApi();

        expect(spyService).toHaveBeenCalled();
        expect(component.jsonData).toEqual(apiData);
        expect(spyComponent).toHaveBeenCalledWith(apiData);
    });

    it('should have called search function with input parameter', () => {
        let button = fixture.debugElement.query(By.css('button'));
        let inputel = fixture.debugElement.query(By.css('input'));
        
        inputel.nativeElement.value = '33';
        
        spyOn(component,'search');

        button.triggerEventHandler('click', null);

        expect(component.search).toHaveBeenCalledWith('33');
    });

    // it('should called filter the data based on route parameter', () => {
    //     let route = TestBed.inject(ActivatedRoute);
    //     let spy = spyOn(component,'filterDataOnId');
    //     fixture.detectChanges();
    //     expect(spy).toHaveBeenCalled;
    //     expect(component.score).toBe('33');
    // });
});
