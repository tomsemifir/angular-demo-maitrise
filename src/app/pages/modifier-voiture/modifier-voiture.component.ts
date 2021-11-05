import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from 'src/app/models/voiture';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-modifier-voiture',
  templateUrl: './modifier-voiture.component.html',
  styleUrls: ['./modifier-voiture.component.css']
})
export class ModifierVoitureComponent implements OnInit {

  voitureForm : FormGroup;
  id : number;
  voiture : Voiture;

  constructor(
    private fb : FormBuilder,
    private service : VoitureService,
    private router : Router,
    private route : ActivatedRoute
    ) { 
    this.voitureForm = this.fb.group({
      marque : "",
      couleur : "",
      prix : 0
    })
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.initVoiture();
  }

  initVoiture() {
    this.service.findById(this.id).subscribe(data => {
      this.voiture = data;
      this.voitureForm.patchValue(this.voiture);
    })
  }

  updateVoiture() {
    this.service.update(this.id, this.voitureForm.value).subscribe(() => {
      this.router.navigateByUrl("/voitures");
    })
  }

}
