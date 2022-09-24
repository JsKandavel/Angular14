import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { DogService } from '../services/dog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  details$: Observable<any> | undefined; 
  post: any
  constructor(private dogService: DogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
      this.dogService.getPost(this.route.snapshot.params['index']).subscribe((response) => {
        console.log('response', response)
        this.post = response;
      })

      
    

  }

}
