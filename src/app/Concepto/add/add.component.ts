import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Concepto } from 'src/app/Modelo/Concepto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  concepto: Concepto = new Concepto();
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit(): void {}

  Guardar() {
    this.service.createConcepto(this.concepto).subscribe((data) => {
      if (data.metodoPago !== 'Choose...') {
        alert('Se agregó un concepto con éxito!');
        this.router.navigate(['listar']);
      }
    });
    if (
      !this.concepto.descripcion ||
      !this.concepto.importe ||
      !this.concepto.metodoPago ||
      this.concepto.metodoPago === 'Choose...'
    ) {
      alert('Por favor, llena los campos');
    }
  }

  Cancelar(){
    this.router.navigate(['listar']);
  }
}
