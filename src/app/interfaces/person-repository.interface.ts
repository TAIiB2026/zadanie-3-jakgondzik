import { Observable } from "rxjs";
import { Person } from "../classes/person";

export interface IPersonRepository{
    getAll(): Person[];
    add(person: Person): Observable<boolean>;
    delete(id: number): Observable<boolean>;
}