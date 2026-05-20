import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../classes/person';
import { IPersonRepository } from '../interfaces/person-repository.interface';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService implements IPersonRepository{
  private readonly globalService = inject(GlobalService);
    private repo: Person[] = [
        new Person(1, 'Jan', 30, new Date(1994, 2, 15)),
        new Person(2, 'Anna', 25, new Date(1999, 7, 22)),
        new Person(3, 'Piotr', 40, new Date(1984, 10, 5)),
        new Person(4, 'Kasia', 22, new Date(2002, 1, 30)),
        new Person(5, 'Michał', 35, new Date(1989, 5, 12))
    ];
    constructor() {
      this.globalService.setServiceCreationDate(new Date());
    }
    getAll(): Person[] {
      this.globalService.setLastFetchDate(new Date());
        return this.repo;
      }
    
      add(person: Person): Observable<boolean> {
        this.repo.push(person);
        return of(true);
      }
    
      delete(id: number): Observable<boolean> {
        const index = this.repo.findIndex(p => p.id === id);
        if (index !== -1) {
          this.repo.splice(index, 1);
          return of(true);
        }
        return of(false);
      }
}