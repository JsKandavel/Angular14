import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogService } from '../services/dog.service'
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-standalone-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './standalone-list.component.html',
  styleUrls: ['./standalone-list.component.scss']
})
export class StandaloneListComponent implements OnInit {
  list: any;

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.dogService.getPosts().subscribe((response) => {
      this.list = response;
    })
  }

}
