import { Component,OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit{
  back:string = "/assets/admission.jpg";

  public getJsonValue:any;
  public postJsonValue:any;
  constructor(private userDataService: UserDataService,private http:HttpClient){}


  ngOnInit(): void {
  }


  public OnSubmit(UserId:any)
  {
    
    this.http.get(`https://652e07faf9afa8ef4b27f981.mockapi.io/clgAdmission/users/${UserId}`).subscribe((data)=>{
      console.log(UserId)
      this.userDataService.setUserId(UserId);
      this.userDataService.setUserDetails(data)
    });

  }

  public postMethod(data:any)
  {
    alert("Press OK to Submit");
      this.http.post(`https://652e07faf9afa8ef4b27f981.mockapi.io/clgAdmission/users`,data).subscribe(()=>{
        console.log('data');
        window.location.reload();
      });
  }


}


