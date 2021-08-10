import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  /**
   *@Inoput decorator is used to pass data (property binding) from parent to child component.
   *@Output decorator is used to pass the data from child to parent component
   *
   * @type {string}
   * @memberof StudentComponent
   */
  @Input() //Permet à ce composant (fils) de recervoir les données venant du composant parent
  myInputMsg: string;

  @Output()//Permet à ce composant (fils) d'envoyer les données au composant parent
  myOutput: EventEmitter<string> = new EventEmitter();

  outputMessage: string = "I am child component.";

  constructor() { }

  ngOnInit(): void {
    console.log(this.myInputMsg);
  }

  sendValues() {
    this.myOutput.emit(this.outputMessage);
  }

}
