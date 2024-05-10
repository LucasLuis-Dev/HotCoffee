import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNewDescription'
})
export class ShortNewDescriptionPipe implements PipeTransform {

  transform(description: string | null): string {
    if (description != null) {
      description = description.substring(0, 120);

    
      if (description.charAt(description.length - 1) === '.') {
        
        description = description.slice(0, -1);
      }
        
      description += '...';
  
      return description;
    } else {
      return 'Sem descrição.'
    }
    
  }

}
