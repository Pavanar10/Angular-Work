import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Item } from 'src/interface/item';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent {
  @Output() onItemAdded: EventEmitter<Item> = new EventEmitter<Item>();
  constructor(private fb: FormBuilder) {}
  newForm: FormGroup = this.fb.group({
    name: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
    creator: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    totalTime: new FormControl('', Validators.required),
  });
  newData!: Item;
  ngOnInit() {}
  addData() {
    this.newData = this.newForm.value;
    console.log(this.newData);
    this.onItemAdded.emit(this.newData);
  }
}
