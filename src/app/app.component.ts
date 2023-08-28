import { Component, OnDestroy } from '@angular/core';
import { FormService } from './form.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'shopping-app';
  openForm:boolean = false;
  displayFormSubscription: Subscription;

  constructor(private formServ: FormService){
    this.openForm = this.formServ.displayForm;
    this.displayFormSubscription = this.formServ.displayFormChange.subscribe(newValue => {
      this.openForm = newValue;
    });
  }
  ngOnDestroy() {
    this.displayFormSubscription.unsubscribe();
  }
}
