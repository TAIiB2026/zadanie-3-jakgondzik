import { Component, Input, inject } from '@angular/core';
import { PersonService } from '../services/person.service';
import { PersonListComponent } from '../person-list/person-list.component';
import { Person } from '../classes/person';

@Component({
  selector: 'app-person-form',
  standalone: false,
  templateUrl: './person-form.component.html',
  styles: ``
})
export class PersonFormComponent {
  private readonly personService = inject(PersonService);

  @Input() public listComponent!: PersonListComponent;

  name: string = '';
  age: number = 0;
  dateOfBirth: string = '';

  addPerson(): void {
    if (!this.name || this.age < 0 || !this.dateOfBirth) {
      return;
    }

    const people = this.personService.getAll();
    
    const newPerson = new Person(
      people.length + 1,
      this.name,
      this.age,
      new Date(this.dateOfBirth)
    );

    this.personService.add(newPerson).subscribe({
      next: (success) => {
        if (success) {
          this.listComponent.refreshData();
          this.listComponent.isFormVisible = false;
          this.name = '';
          this.age = 0;
          this.dateOfBirth = '';
        }
      }
    });
  }
}