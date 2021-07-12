import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Concepto } from 'src/app/Modelo/Concepto';
import { ServiceService } from '../../Service/service.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  conceptos:Concepto[] | undefined;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getConceptos()
    .subscribe(data => {
      this.conceptos=data;
      console.log(data)
    })
  }



}
