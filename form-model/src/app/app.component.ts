import { Component, ViewChild } from '@angular/core';
import{NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('sth') item: any;
  defaultQuestion: any = 'pet';
  MyValue: any = '輸入文字';
  SubmitOrNot = false;

  MyData={
    username:"",
    email:"",
    secret:"",
    QA:"",
  }

  constructor() {}

  onSubmit(item: any) {

    console.log(item);
    this.SubmitOrNot = true;
    this.MyData.username = this.item.value.PatchData.username;
    this.MyData.email = this.item.value.PatchData.email;
    this.MyData.secret =this.item.value.secret ;
    this.MyData.QA = this.item.value.QA;

    this.item.reset();
  }

  Suggest_override() {
    //這方法會蓋過使用者原先填過的

    this.item.setValue({
      PatchData: {
        username: '小名',
        email: 'dfhghgh@gmail.com',
      },

      secret: 'pet',
      QA: '',
    });
  }

  Suggest() {             

    //這方法「不會」蓋過使用者原先填過的
    const suggest_Name = "超級使用者"

    this.item.form.patchValue({

      PatchData:{

        username:suggest_Name

      }
    });
  }
}
