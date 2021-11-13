import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastrModule } from "ngx-toastr";
import { BsDropdownModule,BsDropdownDirective } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    }),
    BsDropdownModule.forRoot(),
    
  ],
  exports:[
    ToastrModule,
    BsDropdownModule,
    BsDropdownDirective
  ]
})
export class SharedModule { }
