import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  constructor(private apiService: ApiService) {}

  onSearch(query: string | number | null | undefined) {
    if (typeof query === 'string' && query.trim()) {
      this.apiService.search(query).subscribe(data => {
        // Manejo de los datos recibidos
        console.log(data);
      });
    } else {
      // Manejo de error o acción alternativa cuando el query es vacío o inválido
      console.error('Query de búsqueda inválido');
    }
  }
}
