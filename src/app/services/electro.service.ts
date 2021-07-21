import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Electrodomestico } from '../domain/electrodomestico'; // import de la clase que crearemos mas adelante
	

@Injectable({
  providedIn: 'root'
})
export class ElectroService {

  constructor(public afs: AngularFirestore) { }

  save(electro: Electrodomestico){
    const refContactos = this.afs.collection("electrodomestico");

    if(electro.uid == null){
      electro.uid= this.afs.createId();
    }

    refContactos.doc(electro.uid).set(Object.assign({}, electro));


  }
  
}
