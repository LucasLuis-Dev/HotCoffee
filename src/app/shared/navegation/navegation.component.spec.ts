import { ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";
import { NavegationComponent } from "./navegation.component"
import { DebugElement } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing"
import { By } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { routes } from "src/app/app-routing.module";

describe('Navegation Component', () => {
    let component: NavegationComponent;
    let fixture: ComponentFixture<NavegationComponent>;
    let el: DebugElement;
    let location: Location;
    let router: Router;


    beforeEach(async() => {
        TestBed.configureTestingModule({
          declarations: [ NavegationComponent ] ,
          imports: [ FormsModule, RouterTestingModule.withRoutes(routes) ]
        }).compileComponents().then(() => {
            router = TestBed.inject(Router);
            location = TestBed.inject(Location);
            fixture = TestBed.createComponent(NavegationComponent);
            router.initialNavigation();
            component = fixture.componentInstance;
            el = fixture.debugElement;
        })
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should submit the form', fakeAsync(() => {
        fixture.whenStable().then(() => {
     
            component.searchQuery = 'Microsoft'
            component.search()
    
            fixture.detectChanges()
            tick();

            let rotaAtual = location.pathname
  
            expect(component.searchQuery).toBe('Microsoft')

            expect(rotaAtual).toBe('/search');
    } )})
        
)});