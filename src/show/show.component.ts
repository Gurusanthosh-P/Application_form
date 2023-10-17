import { Component} from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent {
  public UserId:any;
  public UserDetails:any;

  constructor(private userDataService:UserDataService){}

  ngOnInit():void{
    this.UserId = this.userDataService.getUserId();
    console.log(this.UserId)
    this.UserDetails = this.userDataService.getUserDetails();
    if(this.UserDetails)
    {
      console.log(this.UserDetails.name);

    }
    
  }
  

}
