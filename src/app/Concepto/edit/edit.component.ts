import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Concepto } from 'src/app/Modelo/Concepto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  concepto: Concepto = new Concepto();
  constructor(private router:Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.service.getConceptoId(+id!)
    .subscribe(data => {
      this.concepto = data;
    })
  }

  Actualizar(concepto: Concepto){
    this.service.updateConcepto(concepto)
    .subscribe(data=>{
      this.concepto=concepto;
      alert("Se actualizó con éxito");
      this.router.navigate(["listar"]);
    })
  }
}
