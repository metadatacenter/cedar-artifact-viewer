import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CedarArtifactViewerWrapperComponent } from './cedar-artifact-viewer-wrapper.component';

describe('CedarArtifactViewerWrapperComponent', () => {
  let component: CedarArtifactViewerWrapperComponent;
  let fixture: ComponentFixture<CedarArtifactViewerWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CedarArtifactViewerWrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CedarArtifactViewerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
