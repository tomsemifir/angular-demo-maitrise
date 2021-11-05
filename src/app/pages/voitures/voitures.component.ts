import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/models/voiture';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent implements OnInit {

  voitures : Voiture[]

  constructor(private service : VoitureService) { }

  ngOnInit(): void {
    this.initVoitures();
  }

  initVoitures() {
    this.service.findAll().subscribe(data => {
      this.voitures = data;
    })
  }

  deleteVoiture(id : number) {
    this.service.delete(id).subscribe(() => {
      this.initVoitures();
    })
  }

}
