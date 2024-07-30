import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  publications: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['query']) {
        this.apiService.search(params['query']).subscribe(data => {
          this.publications = data;
        });
      }
    });
  }

  viewDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}
