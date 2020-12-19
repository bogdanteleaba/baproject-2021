import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyMealsPage } from './my-meals.page';

describe('MyMealsPage', () => {
  let component: MyMealsPage;
  let fixture: ComponentFixture<MyMealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMealsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyMealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
