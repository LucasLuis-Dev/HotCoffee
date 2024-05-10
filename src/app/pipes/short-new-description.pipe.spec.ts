import { ShortNewDescriptionPipe } from './short-new-description.pipe';

describe('ShortNewDescriptionPipe', () => {
  it('create an instance', () => {
    const pipe = new ShortNewDescriptionPipe();
    expect(pipe).toBeTruthy();
  });

  it('espero que retorne sem descrição caso a descrição seja nula', () => {
    const pipe = new ShortNewDescriptionPipe();
    const description = null
    const responsePipe = pipe.transform(description)
    expect(responsePipe).toBe('Sem descrição.')
  })

  it('espero que retone um texto com 120 caracteres com final com 3 pontos', () => {
    const pipe = new ShortNewDescriptionPipe();
    const description = 'Usuários do Edge verão limitações no navegador caso a Microsoft não detecte que o Windows está ativado no dispositivo'
    const responsePipe = pipe.transform(description)
    expect(responsePipe).toBe('Usuários do Edge verão limitações no navegador caso a Microsoft não detecte que o Windows está ativado no disposit...')
    expect(responsePipe.length).toBe(123);
    expect(responsePipe.endsWith('...')).toBe(true);
    
  })
});
