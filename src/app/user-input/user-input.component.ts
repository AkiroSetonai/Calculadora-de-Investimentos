import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialInvestiment = '0';
  enteredAnnualInvestiment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    console.log(this.enteredAnnualInvestiment);
    console.log(this.enteredInitialInvestiment);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredDuration);
  }
}
