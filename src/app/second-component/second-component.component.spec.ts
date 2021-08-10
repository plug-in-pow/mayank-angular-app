import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SecondComponentComponent } from './second-component.component';

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

describe('SecondComponentComponent', () => {
  let component: SecondComponentComponent;
  let fixture: ComponentFixture<SecondComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondComponentComponent ],
      providers: [
          {provide:Router, useClass: RouterStub },
          { provide: ActivatedRoute, useClass: ActivatedRouteStub },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondComponentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call list method when list all data button clicked', () => {
    let button = fixture.debugElement.query(By.css('.list-data-button'));

    let spyList = spyOn(component,'list');

    button.triggerEventHandler('click',null);
    
    expect(spyList).toHaveBeenCalled;
  });

  it('should navigate to /complete when list method is called', () => {
    let router = TestBed.inject(Router);
    let route = TestBed.inject(ActivatedRoute)
    let spy = spyOn(router,'navigate');
    
    component.list();

    expect(spy).toHaveBeenCalledWith(['complete'],{relativeTo: route});
  });

  it('should call showChild method when child component button clicked', () => {
    let button = fixture.debugElement.query(By.css('.child-component-button'));

    let spy = spyOn(component,'showChild');

    button.triggerEventHandler('click',null);
    
    expect(spy).toHaveBeenCalled;
  });

  it('should navigate to /child when showChild method is called', () => {
    let router = TestBed.inject(Router);
    let route = TestBed.inject(ActivatedRoute)
    let spy = spyOn(router,'navigate');
    
    component.showChild();

    expect(spy).toHaveBeenCalledWith(['child'],{relativeTo: route});
  });
});
