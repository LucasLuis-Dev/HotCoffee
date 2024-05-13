import { PipesModule } from "src/app/pipes/pipes.module";
import { SmallCardComponent } from "./small-card.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

const mockNew = {
    "article_id": "92cd4fbbc0c4fb308bc6dee6c8bc447f",
    "title": "Banishers: Ghosts of New Eden recebe teste gratuito; detalhes",
    "link": "https://psxbrasil.com.br/banishers-ghosts-of-new-eden-recebe-teste-gratuito-detalhes/",
    "keywords": [
      "notícias",
      "playstation 5",
      "banishers: ghosts of new eden"
    ],
    "creator": [
      "Ivan Nikolai Barkow Castilho"
    ],
    "video_url": null,
    "description": "A Focus Entertainment anunciou que um teste gratuito de Banishers: Ghosts of New Eden está disponível. Usuários interessados podem acessar o teste na página do jogo da PS Store. Não é necessário ser assinante PS Plus. O teste inclui o começo do jogo e, caso se interesse, o progresso pode ser transferido. ﻿ [PS Store [...]",
    "content": "ONLY AVAILABLE IN PAID PLANS",
    "pubDate": "2024-05-09 05:41:49",
    "image_url": "https://psxbrasil.com.br/wp-content/uploads/2023/07/Banishers-2023_06-08-23-696x392.jpg",
    "source_id": "psxbrasil",
    "source_priority": 3592782,
    "source_url": "https://psxbrasil.com.br",
    "source_icon": "https://i.bytvi.com/domain_icons/psxbrasil.jpg",
    "language": "portuguese",
    "country": [
      "brazil"
    ],
    "category": [
      "top",
      "technology",
      "science"
    ],
    "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS"
  }

describe('SmallCard Component', () => {
    let component: SmallCardComponent;
    let fixture:  ComponentFixture<SmallCardComponent>
    let el: DebugElement;
    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [SmallCardComponent],
            imports:[ PipesModule ],
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(SmallCardComponent);
            component = fixture.componentInstance;
            el = fixture.debugElement;
            component.new = mockNew;
            fixture.detectChanges();
        })
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('espero que os dados renderizados correspondão com o mock', () => {
        let link = el.query(By.css('.small-card-link__container'))
        let img = el.query(By.css('.small-card-image__container-img'))
        let title = el.query(By.css('.small-card-title-h2'))
        let description = el.query(By.css('.small-card-descriptions-p'))
        let date = el.query(By.css('.small-card-data__container-p'))
        
        expect(date.nativeElement.textContent).toBe(" 09/05/2024 05:41 ")
        expect(description.nativeElement.textContent).toBe(" A Focus Entertainment anunciou que um teste gratuito de Banishers: Ghosts of New Eden está disponível. Usuários inter... ")
        expect(title.nativeElement.textContent).toBe(" " + mockNew.title + " ")
        expect(img.nativeElement.src).toBe(mockNew.image_url)
        expect(link.nativeElement.href).toBe(mockNew.link)
    })
    
})