import { Component, OnInit, inject } from '@angular/core';
import { Person } from '../classes/person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-person-list',
  standalone: false,
  templateUrl: './person-list.component.html',
  styles: ``
})
export class PersonListComponent implements OnInit {
  private readonly personService = inject(PersonService);
  public people: Person[] = [];
  public isFormVisible: boolean = false;
  ngOnInit(): void {
    this.refreshData();
  }

  refreshData(): void {
    this.people = this.personService.getAll();
  }

  onDelete(id: number): void {
    this.personService.delete(id).subscribe({
      next: (success) => {
        if (success) {
          this.refreshData();
        }
      }
    });
  }
  toggleForm(): void {
    this.isFormVisible = !this.isFormVisible;
  }
}