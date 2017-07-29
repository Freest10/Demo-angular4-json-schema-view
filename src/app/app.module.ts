import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {JsonSchemaViewModule} from "angular4-json-schema-view"
import { AppComponent } from './app.component';
import { WidgetsService } from 'angular4-json-schema-view';
import { JsonSchemaShareOptionsService } from 'angular4-json-schema-view';
//import { CustomInputComponent } from './custom_widgets/custom-input.component';
import {  MdSelectModule, MdButtonModule, MdCheckboxModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AceEditorModule } from 'ng2-ace-editor';

@NgModule({
  declarations: [
    AppComponent,
    //CustomInputComponent
  ],
  imports: [
    BrowserModule,
    JsonSchemaViewModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSelectModule,
    FormsModule,
    AceEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  //entryComponents: [CustomInputComponent]
})
export class AppModule {

  constructor(private widgetService: WidgetsService, private schemaShareOptions: JsonSchemaShareOptionsService) {
    //this.widgetService.registerWidget('string', CustomInputComponent);
    // let shareOptions = {
    //   "apiUrl": "api2",
    //   "frameWorkName": 'material-design'
    // }
   // this.schemaShareOptions.setShareOptions(shareOptions);
  }

}
