import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-voitures-form',
  templateUrl: './voitures-form.component.html',
  styleUrls: ['./voitures-form.component.css']
})
export class VoituresFormComponent implements OnInit {

  voitureForm : FormGroup;

  constructor(
    private fb : FormBuilder,
    private service : VoitureService,
    private router : Router
    ) { 
    this.voitureForm = this.fb.group({
      marque : "",
      couleur : "",
      prix : 0
    })
  }

  ngOnInit(): void {
  }

  addVoiture() {
    this.service.add(this.voitureForm.value).subscribe(() => {
      this.router.navigateByUrl("/voitures")
    })
  }

}
