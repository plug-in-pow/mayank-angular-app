import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FirstComponentComponent } from './first-component.component';

class RouterStub {
    navigate(params: any){}
}

describe('FirstComponentComponent', () => {
    let component: FirstComponentComponent;
    let fixture: ComponentFixture<FirstComponentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FirstComponentComponent],
            providers: [
                { provide: Router, useClass: RouterStub }
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FirstComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should route with parameter provided', () => {
        let parameter = 33;
        let router = TestBed.inject(Router);
        let spy = spyOn(router,'navigate');
        
        component.search(parameter);

        expect(spy).toHaveBeenCalledWith(['first-component',parameter]);
    });

    it('should have called search function with input parameter', () => {
        let button = fixture.debugElement.query(By.css('button'));
        let inputel = fixture.debugElement.query(By.css('input'));
        
        inputel.nativeElement.value = '33';
        
        spyOn(component,'search');

        button.triggerEventHandler('click', null);

        expect(component.search).toHaveBeenCalledWith('33');
    });
});
