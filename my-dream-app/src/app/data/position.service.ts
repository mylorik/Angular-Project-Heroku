import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Position } from './position';
import { Observable } from 'rxjs';

@Injectable()
export class PositionService {
  private path = 'https://protected-oasis-33486.herokuapp.com/';
  constructor(private http: HttpClient) {}

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(
      this.path + 'positions'
    );
  }
  savePosition(position: Position) {
    return this.http.put<any>(
      this.path + 'position/' + position._id,
      position
    );
  }

  getPosition(id: string): Observable<Position[]> {
    return this.http.get<Position[]>(
      this.path + 'position/' + id
    );
  }
}
