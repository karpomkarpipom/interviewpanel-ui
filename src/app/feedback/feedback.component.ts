import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './feedback.component.html',
  styleUrls: [ './feedback.component.css' ]
})
export class FeedbackComponent  {
  // name = 'Feedback';
  // formGroup: FormGroup

  // constructor() {
  //   this.formGroup = new FormGroup({
  //     emailField: new FormControl('', [Validators.required, Validators.email]),
  //     feedbackField: new FormControl('', [
  //       Validators.required, 
  //       Validators.minLength(25), 
  //       Validators.maxLength(3000)
  //     ])
  //   })
  // }

  // getErrorMessage(control: AbstractControl): string {
  //   // Don't say anything if control doesn't exist, or is valid
  //   if (!control || control.valid) {
  //     return '';
  //   }

  //   // Required always comes first
  //   if (control.hasError('required')) {
  //     return "Cannot be empty";
  //   }
  //   if (control.hasError('email')) {
  //     return "Must be a valid email";
  //   }
  //   if (control.hasError('minlength')) {
  //     const limit = control.getError('minlength').requiredLength;
  //     return `Must be at least ${limit} characters`;
  //   }
  //   if (control.hasError('minlength')) {
  //     const limit = control.getError('maxlength').requiredLength;
  //     return `Must be no more than ${limit} characters`;
  //   }

  //   // Default general error message
  //   return "Invalid input";
  // }

  // onSubmit() {
  //   this.formGroup.reset()
  // }

  // get emailField(): AbstractControl {
  //   return this.formGroup.get('emailField');
  // }

  // get feedbackField(): AbstractControl {
  //   return this.formGroup.get('feedbackField');
  // }

  name: string;
  email: string;
  message: string;

  constructor() {}

  ngOnInit() {}

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo); 
  }
}
