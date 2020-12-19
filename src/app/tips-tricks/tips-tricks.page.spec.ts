import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TipsTricksPage } from './tips-tricks.page';

describe('TipsTricksPage', () => {
  let component: TipsTricksPage;
  let fixture: ComponentFixture<TipsTricksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsTricksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TipsTricksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
