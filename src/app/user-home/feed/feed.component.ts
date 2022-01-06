import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  userForm:FormGroup;
  listData:any;
  userFname= '';
  userLname: '';


  constructor(private fb:FormBuilder, private auth: AuthService ){

      this.listData = [];

    this.userForm = this.fb.group({
      name : ['', Validators.required],
      address : ['', Validators.required],
      ContactNo: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }

  addItem(){
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }
  reset(){
    this.userForm.reset();
  }

  removeItems(element:any){
    this.listData.forEach((value:any,dex:any) => {
      if(value == element){
        this.listData.splice(dex,1)
      }

    });


  }

  ngOnInit(): void {
    this.userFname = this.auth.getDataV2().firstname;
    this.userLname = this.auth.getDataV2().lastname;
  
    console.log(this.auth.getDataV2());
  }

  login(form) {
    this.auth.login(form.value.email, form.value.password);
  }

  createThread(form) {
    
  }

  onSubmit() {
    
  }

}
