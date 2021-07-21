import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  public appListado = [
    { indice:"1", nombre: 'Televisión', consumoE: "100", peso: "79Kg"},
    { indice:"2", nombre: 'Lavadora', consumoE: "70", peso: "100kg" },
    { indice:"3", nombre: 'Cocina', consumoE: "120", peso: "150kg" },
    { indice:"4", nombre: 'Radio', consumoE: "50", peso: "60kg" },
   
  ];

  constructor(private router: Router, private route: ActivatedRoute ) { 
    
  }

  ngOnInit() {
  }

}
