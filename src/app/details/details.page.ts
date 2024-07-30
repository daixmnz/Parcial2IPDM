import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  publication: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.search(id).subscribe(data => {
        this.publication = data;
      });
    } else {
      // Manejo de error o acción alternativa cuando id es null
      console.error('ID no encontrado en la URL');
    }
  }
}
