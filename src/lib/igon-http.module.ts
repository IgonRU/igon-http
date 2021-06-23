import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {IgonHttpService} from "./igon-http.service";
import {IgonHttpErrorService} from "./igon-http-error.service";


@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    IgonHttpService,
    IgonHttpErrorService
  ],
  exports: [
  ]
})
export class IgonHttpModule {
  // public static forRoot() {
  //   return {
  //     ngModule: IgonHttpModule,
  //     providers: [
  //       IgonHttpService,
  //       IgonHttpErrorService
  //     ]
  //   }
  // }
}
