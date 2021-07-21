import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationExtras, Router } from '@angular/router';
import { Electrodomestico } from 'src/app/domain/electrodomestico';
import { ElectroService } from 'src/app/services/electro.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  electroo: Electrodomestico = new Electrodomestico();

  constructor(private router: Router, private electroService: ElectroService) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.electroo);
    this.electroService.save(this.electroo);
  }

}
