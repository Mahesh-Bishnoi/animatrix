import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../shared/Interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('/api/users');
  }
  public addUser(user:User): Observable<User> {
    return this.httpClient.post<User>('/api/users',user);
  }
  public getUserbyId(id:Number):Observable<User>{
    return this.httpClient.get<User>('/api/users/'+id);
  }
  public updateUser(user:User):Observable<any>{
    return this.httpClient.put<User>('/api/users/'+user.id,user);
  }
}
