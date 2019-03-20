import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.css']
})
export class EnseignantsComponent implements OnInit {

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {
    this
  }
title='app works';
s:string='hello';
}
