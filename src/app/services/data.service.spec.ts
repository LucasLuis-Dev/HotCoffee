import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { DataService } from "./data.service";
import { IRequestNew } from "../interfaces/requestNew.interface";


const REQUEST = {
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
      },
      {
        "article_id": "35d47a7f681b32aeab99476fb4abacbb",
        "title": "Master Detective Archives: RAIN CODE+ será lançado em 1o de outubro no Ocidente",
        "link": "https://psxbrasil.com.br/master-detective-archives-rain-code-sera-lancado-em-1o-de-outubro-no-ocidente/",
        "keywords": [
          "notícias",
          "playstation 5",
          "trailer",
          "vídeos",
          "master detective archives: rain code+"
        ],
        "creator": [
          "Ivan Nikolai Barkow Castilho"
        ],
        "video_url": null,
        "description": "A Spike Chunsoft anunciou que Master Detective Archives: RAIN CODE+ será lançado em 1o de outubro no Ocidente por 59,99 dólares para PS5, Xbox Series e PC via Steam. No Japão, o game chega em 18 de julho, como revelado anteriormente. A versão japonesa terá suporte apenas ao japonês e chinês no lançamento, mas será [...]",
        "content": "ONLY AVAILABLE IN PAID PLANS",
        "pubDate": "2024-05-09 05:30:11",
        "image_url": "https://psxbrasil.com.br/wp-content/uploads/2024/05/raincodelimited.jpg",
        "source_id": "psxbrasil",
        "source_priority": 3592782,
        "source_url": "https://psxbrasil.com.br",
        "source_icon": "https://i.bytvi.com/domain_icons/psxbrasil.jpg",
        "language": "portuguese",
        "country": [
          "brazil"
        ],
        "category": [
          "technology",
          "top",
          "science"
        ],
        "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS"
      },
      {
        "article_id": "221359fc47dda4c2269b9c501f36caf1",
        "title": "Genshin Impact terá alteração no desempenho visual no PS4 a partir da Versão 5.0",
        "link": "https://psxbrasil.com.br/genshin-impact-tera-alteracao-no-desempenho-visual-no-ps4-a-partir-da-versao-5-0/",
        "keywords": [
          "notícias",
          "playstation 4",
          "playstation 5",
          "genshin impact"
        ],
        "creator": [
          "Ivan Nikolai Barkow Castilho"
        ],
        "video_url": null,
        "description": "A HoYoverse anunciou que a versão de PS4 sofrerá uma queda nos seus visuais com a Versão 5.0 de Genshin Impact. Ou seja, quando a Versão 5.0 for lançada, o jogo ficará ‘mais feio’, a fim de que seu desempenho continue estável. O motivo disso é que as versões que possuem uma perfomance melhor (como [...]",
        "content": "ONLY AVAILABLE IN PAID PLANS",
        "pubDate": "2024-05-09 04:22:26",
        "image_url": "https://psxbrasil.com.br/wp-content/uploads/2024/05/Genshin-Impact-696x392.jpg",
        "source_id": "psxbrasil",
        "source_priority": 3592782,
        "source_url": "https://psxbrasil.com.br",
        "source_icon": "https://i.bytvi.com/domain_icons/psxbrasil.jpg",
        "language": "portuguese",
        "country": [
          "brazil"
        ],
        "category": [
          "technology",
          "science",
          "top"
        ],
        "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS"
      },
      {
        "article_id": "eb7eeeb19029339506a6d720b20da604",
        "title": "WitchSpring R será lançado em 29 de agosto para PS5",
        "link": "https://psxbrasil.com.br/witchspring-r-sera-lancado-em-29-de-agosto-para-ps5/",
        "keywords": [
          "notícias",
          "playstation 5",
          "trailer",
          "vídeos",
          "witchspring r"
        ],
        "creator": [
          "Ivan Nikolai Barkow Castilho"
        ],
        "video_url": null,
        "description": "A desenvolvedora KIWI WALKS anunciou que WitchSpring R será lançado em 29 de agosto de 2024 no PS5, Xbox One e Switch. O título está disponível para PC. No Ocidente, a PM Studios publicará o jogo. Informações sobre as edições físicas ainda não foram divulgadas. No Japão, no entanto, haverá uma edição física e inclusive [...]",
        "content": "ONLY AVAILABLE IN PAID PLANS",
        "pubDate": "2024-05-09 02:40:18",
        "image_url": "https://psxbrasil.com.br/wp-content/uploads/2024/05/WitchSpring-R-PS5-Switch_JPN_05-08-24_002.jpg",
        "source_id": "psxbrasil",
        "source_priority": 3592782,
        "source_url": "https://psxbrasil.com.br",
        "source_icon": "https://i.bytvi.com/domain_icons/psxbrasil.jpg",
        "language": "portuguese",
        "country": [
          "brazil"
        ],
        "category": [
          "technology",
          "top",
          "science"
        ],
        "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS"
      },
      {
        "article_id": "3e7f0d809db42b0fc5daf96be79e02aa",
        "title": "LockBit: líder de famoso grupo cibercriminoso é identificado; confira",
        "link": "http://jornal24horas.com.br/2024/05/08/lockbit-lider-de-famoso-grupo-cibercriminoso-e-identificado-confira/",
        "keywords": [
          "tecnologia"
        ],
        "creator": [
          ""
        ],
        "video_url": null,
        "description": "De acordo com o Departamento de Justiça dos EUA, Dmitry Yuryevich Khoroshev, um cidadão russo de 31 anos, é a verdadeira identidade do mentor do grupo hacker de ransomware LockBit. Khoroshev vinha há anos despistando as autoridades sob o apelido LockBitSupp, e pode ter lucrado, sozinho, cerca de US$ 100 milhões por meio de ações [...]",
        "content": "ONLY AVAILABLE IN PAID PLANS",
        "pubDate": "2024-05-09 01:00:26",
        "image_url": "http://jornal24horas.com.br/wp-content/uploads/2024/05/08165436453240-BvhBTA.jpeg",
        "source_id": "jornal24horas",
        "source_priority": 42157300,
        "source_url": "http://jornal24horas.com.br",
        "source_icon": "https://i.bytvi.com/domain_icons/jornal24horas.png",
        "language": "portuguese",
        "country": [
          "brazil"
        ],
        "category": [
          "technology"
        ],
        "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS"
      },
      {
        "article_id": "4f0dbaed86d5cb1658abd761333907e9",
        "title": "Hera Venenosa revela sua bizarra e divina forma definitiva no Universo DC",
        "link": "https://tecnologia.ig.com.br/parceiros/canaltech/2024-05-08/hera-venenosa-revela-sua-bizarra-e-divina-forma-definitiva-no-universo-dc.html",
        "keywords": null,
        "creator": [
          "Canaltech",
          "Canaltech"
        ],
        "video_url": null,
        "description": "A Hera Venenosa teve sua origem revisada recentemente, e, agora, a DC revela sua bizarra e divina forma definitiva",
        "content": "ONLY AVAILABLE IN PAID PLANS",
        "pubDate": "2024-05-09 00:35:07",
        "image_url": "https://i0.statig.com.br/bancodeimagens/3o/v1/u4/3ov1u4na5ybatloudlwwe7aqv.jpg",
        "source_id": "ig",
        "source_priority": 113019,
        "source_url": "https://www.ig.com.br",
        "source_icon": "https://i.bytvi.com/domain_icons/ig.png",
        "language": "portuguese",
        "country": [
          "brazil"
        ],
        "category": [
          "technology"
        ],
        "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS"
      },
      {
        "article_id": "88dc0ab89f90048c5cc5a33606bc117c",
        "title": "Chuva e vento voltam a Porto Alegre; situação só deve melhorar na próxima terça",
        "link": "https://tecnologia.ig.com.br/parceiros/canaltech/2024-05-08/chuva-e-vento-voltam-a-porto-alegre--situacao-so-deve-melhorar-na-proxima-terca.html",
        "keywords": null,
        "creator": [
          "Canaltech",
          "Canaltech"
        ],
        "video_url": null,
        "description": "Defesa Civil do RS emite alerta de chuva e ventos de mais de 90 km/h para capital gaúcha — bloqueio atmosférico que gera chuvas só deve ceder após 14 de maio",
        "content": "ONLY AVAILABLE IN PAID PLANS",
        "pubDate": "2024-05-09 00:05:07",
        "image_url": "https://i0.statig.com.br/bancodeimagens/1i/4l/jm/1i4ljmkqqhu1c60h7b99qsnhk.jpg",
        "source_id": "ig",
        "source_priority": 113019,
        "source_url": "https://www.ig.com.br",
        "source_icon": "https://i.bytvi.com/domain_icons/ig.png",
        "language": "portuguese",
        "country": [
          "brazil"
        ],
        "category": [
          "technology"
        ],
        "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS"
      },
      {
        "article_id": "bfb705437077a0720981aa332e75db62",
        "title": "Android 15: veja quais celulares Motorola devem receber o sistema operacional",
        "link": "http://jornal24horas.com.br/2024/05/08/android-15-veja-quais-celulares-motorola-devem-receber-o-sistema-operacional/",
        "keywords": [
          "tecnologia"
        ],
        "creator": [
          ""
        ],
        "video_url": null,
        "description": "O Android 15 já está disponível para testadores e deve ser anunciado ao público geral em breve. Apesar do Google ainda não ter liberado uma lista oficial, é possível prever os celulares que serão atualizados com base no suporte das marcas, neste caso, da Motorola. Até agora, a Motorola não se manifestou publicamente sobre quais [...]",
        "content": "ONLY AVAILABLE IN PAID PLANS",
        "pubDate": "2024-05-08 23:45:00",
        "image_url": "http://jornal24horas.com.br/wp-content/uploads/2024/05/08173934333270-GVu5SX.jpeg",
        "source_id": "jornal24horas",
        "source_priority": 42157300,
        "source_url": "http://jornal24horas.com.br",
        "source_icon": "https://i.bytvi.com/domain_icons/jornal24horas.png",
        "language": "portuguese",
        "country": [
          "brazil"
        ],
        "category": [
          "technology"
        ],
        "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS"
      },
      {
        "article_id": "4768c6853c20b9224ed45010f186c94e",
        "title": "X-Men finalmente turbinam o poder de uma heroína 35 anos depois",
        "link": "https://tecnologia.ig.com.br/parceiros/canaltech/2024-05-08/x-men-finalmente-turbinam-o-poder-de-uma-heroina-35-anos-depois.html",
        "keywords": null,
        "creator": [
          "Canaltech",
          "Canaltech"
        ],
        "video_url": null,
        "description": "Após 35 anos, X-Men atualiza oficialmente os poderes de uma heroína icônica que pode até se tornar a próxima a alcançar o nível Ômega",
        "content": "ONLY AVAILABLE IN PAID PLANS",
        "pubDate": "2024-05-08 23:35:08",
        "image_url": "https://i0.statig.com.br/bancodeimagens/97/v8/xe/97v8xek58lfxltr72f2mr9789.jpg",
        "source_id": "ig",
        "source_priority": 113019,
        "source_url": "https://www.ig.com.br",
        "source_icon": "https://i.bytvi.com/domain_icons/ig.png",
        "language": "portuguese",
        "country": [
          "brazil"
        ],
        "category": [
          "technology"
        ],
        "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
        "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS"
      }
    ],
    "nextPage": "1715211308410813630"
  }

describe('DataService', () => {
    let service: DataService;
    let testingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ]
        });
        service = TestBed.inject(DataService);
        testingController = TestBed.inject(HttpTestingController);
    })

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get news', () => {
        service.getNews().subscribe({
            next: (response: IRequestNew) => {
                expect(response).toBeTruthy();
            }
        })

        const mockReq = testingController.expectOne('https://newsdata.io/api/1/news?apikey=pub_3001762768cb972778a02365931bdb255a5eb&country=br&image=1&video=0&category=technology')
        mockReq.flush(Object.values(REQUEST))
    })

    it('should get news by category', () => {
      const category: string = 'sports';
      service.getNewsByCategory(category).subscribe({
        next: (response: IRequestNew) => {
          expect(response).toBeTruthy();
        }
      })

      const mockReq = testingController.expectOne('https://newsdata.io/api/1/news?apikey=pub_3001762768cb972778a02365931bdb255a5eb&country=br&image=1&video=0&category=sports')
      mockReq.flush(Object.values(REQUEST))
    })

    it('should get news by next page', () => {
      const nextPage: string = '12';
      const category: string = 'sports';
      service.getNewsByNextPage(category, nextPage).subscribe({
        next: (response: IRequestNew) => {
          expect(response).toBeTruthy();
        }
      })

      const mockReq = testingController.expectOne('https://newsdata.io/api/1/news?apikey=pub_3001762768cb972778a02365931bdb255a5eb&country=br&image=1&video=0&category=sports&page=12')
      mockReq.flush(Object.values(REQUEST));
    })

    it('should get news by search', () => {
      const query: string = 'Microsoft';

      service.getNewsBySearch(query).subscribe({
        next: (response: IRequestNew) => {
          expect(response).toBeTruthy();
        }
      })

      const mockReq = testingController.expectOne('https://newsdata.io/api/1/news?apikey=pub_3001762768cb972778a02365931bdb255a5eb&country=br&image=1&video=0&q=Microsoft')
      mockReq.flush(Object.values(REQUEST));
    })
});