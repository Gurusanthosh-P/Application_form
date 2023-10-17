import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private UserId:any;
  private UserDetails:any;

  setUserId(id:any)
  {
    this.UserId=id
  }

  getUserId():any
  {
      return this.UserId
  }

  setUserDetails(details:any)
  {
    this.UserDetails=details
  }

  getUserDetails():any{
    return this.UserDetails
  }
  constructor() { }
}
