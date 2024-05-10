import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { of } from 'rxjs';

const mockResponseNews = {
    "status": "success",
    "totalResults": 247,
    "results": [
      {
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
      },
      {
        "article_id": "ebd1963f21ac808b1df57f75c111a6be",
        "title": "Demo de Fishbowl está disponível para PS5",
        "link": "https://psxbrasil.com.br/demo-de-fishbowl-esta-disponivel-para-ps5/",
        "keywords": [
          "notícias",
          "playstation 5",
          "fishbowl"
        ],
        "creator": [
          "Ivan Nikolai Barkow Castilho"
        ],
        "video_url": null,
        "description": "A desenvolvedora imissmyfriends lançou uma demo de Fishbowl para PS5. O jogo faz parte do PlayStation India Hero Project. Fishbowl é uma história de vida que leva os jogadores a uma jornada de nostalgia e melancolia, explorando temas de luto, conexão e autodescoberta, ambientados na paisagem cultural da Índia urbana. O mundo está repleto de [...]",
        "content": "ONLY AVAILABLE IN PAID PLANS",
        "pubDate": "2024-05-09 05:39:58",
        "image_url": "https://psxbrasil.com.br/wp-content/uploads/2024/05/53562502645_6899c1169e_h-696x392.jpg",
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
    ],
    "nextPage": "1715211308410813630"
  }

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;
  let mockDataService = jasmine.createSpyObj('DataService', ['getNews', 'getNewsByCategory'])

  beforeEach(waitForAsync(
    () => { 
        TestBed.configureTestingModule({
            declarations: [HomeComponent, HeaderComponent, FooterComponent ],
            providers: [
                { provide: DataService, useValue: mockDataService }
            ]

        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(HomeComponent);
            component = fixture.componentInstance;
       
            el = fixture.debugElement;
        })
    }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('espero que quando o componente for inciado o atributo newscache esteja com noticias', () => {
    mockDataService.getNews.and.returnValue(of(mockResponseNews));
    component.ngOnInit()
    expect(component.newsCache.length).toBeGreaterThan(0)
    expect(mockDataService.getNews).toHaveBeenCalled();
  })

  it('espero que quando o metodo de mudar a categoria as notiicas mudem', () => {
    const category = 'technology'
    mockDataService.getNewsByCategory.and.returnValue(of(mockResponseNews));
    component.onCategoryChange()
    expect(component.selectedCategory).toEqual(category)
    expect(component.newsCache.length).toBeGreaterThan(0)
    expect(mockDataService.getNewsByCategory).toHaveBeenCalled();
  })
});