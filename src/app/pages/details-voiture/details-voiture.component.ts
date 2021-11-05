import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Voiture } from 'src/app/models/voiture';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-details-voiture',
  templateUrl: './details-voiture.component.html',
  styleUrls: ['./details-voiture.component.css']
})
export class DetailsVoitureComponent implements OnInit {

  id: number;
  voiture : Voiture;

  constructor(
    private route : ActivatedRoute,
    private service : VoitureService
    ) { 
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.initVoiture();
  }

  initVoiture() {
    this.service.findById(this.id).subscribe(data => {
      this.voiture = data;
    })
  }

}
