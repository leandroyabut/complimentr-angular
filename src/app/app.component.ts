import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Compliment {
  compliment: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  
  compliment = "";
  loading = true;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.loadCompliment();
  }

  loadCompliment() {
    this.loading = true;
    this.httpClient.get<Compliment>("https://complimentr.com/api").subscribe(
      (data) => {
        this.compliment = data.compliment;
        this.loading = false;
      }
    );
  }
  
}
