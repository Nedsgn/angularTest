import { Component } from '@angular/core';
import { Enseignant } from './enseignant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello its works!';

  s:string='bonjour';
tel:string='0124567895';
afficherLaListe:boolean=false;
  num:number= 175;

  //enseignant

  nom:string = 'Jack';
  prenom:string='Nawi';
  numero:number=215;
  dateNaissance:string='1900-01-01';
  dateEmbauche:string="1478-58-44";
  sexe:string='F';
  grade:string='ASS';
  photo:string='https://d3iw72m71ie81c.cloudfront.net/jeselle.jpg'




//enseignant Object

enseignant:Enseignant = {
  id:1,
  nom:'TOM',
  prenom:'Eric',
  numero:12345,
  dateEmbauche:'1990-01-01',
  dateNaissance:'1960-01-01',
  grade:'ABC',
  sexe:'H',
  photo:'https://d3iw72m71ie81c.cloudfront.net/gaurav.JPG'
};

enseignants:Enseignant []= [
  {
  id:1,
  nom:'TOM',
  prenom:'Eric',
  numero:12345,
  dateEmbauche:'1990-01-01',
  dateNaissance:'1960-01-01',
  grade:'ABC',
  sexe:'H',
  photo:'https://d3iw72m71ie81c.cloudfront.net/gaurav.JPG'
},
{
id:1,
  nom:'TOM',
  prenom:'Erico',
  numero:12345,
  dateEmbauche:'1990-11-01',
  dateNaissance:'1960-01-01',
  grade:'ABC',
  sexe:'H',
  photo:'https://d3iw72m71ie81c.cloudfront.net/gaurav.JPG'
},
{
id:1,
  nom:'TOMa',
  prenom:'Eric',
  numero:12345,
  dateEmbauche:'1990-01-01',
  dateNaissance:'1960-01-01',
  grade:'ABC',
  sexe:'H',
  photo:'https://d3iw72m71ie81c.cloudfront.net/gaurav.JPG'


}
]

}