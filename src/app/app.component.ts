import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  private inctanceOfWidgetsSchema: any;
  arr: any;
  changedData: any;
  submitedData: any;
  schemas: any = [
    {
      name: "simple",
      value: require("./jsons-of-schema/simple.json")
    },
    {
      name: "array",
      value: require("./jsons-of-schema/array.json")
    },
    {
      name: "tabs",
      value: require("./jsons-of-schema/tabs.json")
    },
    {
      name: "tab-array",
      value: require("./jsons-of-schema/tab-array.json")
    },
    {
      name: "select(object data output)",
      value: require("./jsons-of-schema/select-object-output.json")
    },
    {
      name: "select(string data output)",
      value: require("./jsons-of-schema/select-string-output.json")
    },
    {
      name: "integer and radios",
      value: require("./jsons-of-schema/integer-and-radios.json")
    },
    {
      name: "list(object output)",
      value: require("./jsons-of-schema/list-object-output.json")
    },
    {
      name: "list(string output)",
      value: require("./jsons-of-schema/list-string-output.json")
    },
    {
      name: "validating",
      value: require("./jsons-of-schema/validating.json")
    },
    {
      name: "bootstrap grid",
      value: require("./jsons-of-schema/bootstrap-grid.json")
    }
  ]
  frameWorkName = "material-design";
  frameWorksName = [{name: "noFrameWork", value: "none"}, {name: "Material Design", value: "material-design"}];

  selectedSchema: any;

  schemaEditorValue: string;

  aceEditorOptions: any = {
    highlightActiveLine: true,
    maxLines: 1000,
    printMargin: false,
    autoScrollEditorIntoView: true
  };

  options = {
   // "apiUrl": "api",
    "frameWorkName": 'material-design'
  }

  // model: any = {
  //   "last_name": "Имзя"
  // };
  constructor(){}

  ngOnInit(){
    this.selectedSchema = this.schemas[0];
    this.updateschemaEditorValue(this.selectedSchema.value);
  }

  updateschemaEditorValue(value){
    let selectedValue =  Object.assign({}, this.selectedSchema.value);
    this.schemaEditorValue = JSON.stringify(selectedValue, null, '\t');
  }

  changedSelectSchema(event){
    let changedSchemaName = event.value;
    this.selectSchemaByName(changedSchemaName);
    this.clearChangeDataAndSubmitted();
  }



  selectSchemaByName(changedSchemaName){
    this.schemas.forEach((schema)=>{
      if(schema.name == changedSchemaName){
        this.selectedSchema = Object.assign({},schema);
        this.updateschemaEditorValue(this.selectedSchema.value);
        return false;
      }
    })
  }

  inctanceOfWidgets(widgets){
    this.inctanceOfWidgetsSchema = widgets;
    /*this.inctanceOfWidgetsSchema["name"].updateDelay();
    this.inctanceOfWidgetsSchema["tabContent"].widgetSubject.subscribe((type) => {
      console.log(type, this.inctanceOfWidgetsSchema["tabContent"], this.inctanceOfWidgetsSchema, 'tabSub');
    })*/
    /* this.inctanceOfWidgetsSchema["send"].widgetSubject.subscribe((type) => {
      if('buttonClick') this.fnctionClikc()
    })*/

    //widgets["last_name"].updateDelay();
    /*widgets["send"].buttonClick().subscribe(
     value => {console.log('next Button Click')},
     error => console.log('error Button Click'),
     () => console.log('finished Button Click')
     )*/
  }

  inctanceOfWidgets2(widgets){
    //widgets["first_name"].updateDelay();
    /*widgets["send"].buttonClick().subscribe(
     value => {console.log('next Button Click')},
     error => console.log('error Button Click'),
     () => console.log('finished Button Click')
     )*/
  }

  fnctionClikc(){
    console.log('fnctionClikc');
  }

  generateForm(value){
    this.selectedSchema.value = JSON.parse(value);
  }

  clearChangeDataAndSubmitted(){
    this.submitedData = "";
    this.changedData = "";
  }

  schemaChanges(value){
    let stringValue = JSON.stringify(value, null, '\t');
    if(stringValue){
      this.changedData = stringValue;
    }else{
      this.changedData = "";
    }
  }

  submitedValue(value){
    if(value){
      this.submitedData = JSON.stringify(value, null, '\t');
    }else{
      this.submitedData = "";
    }
  }

  changedFrameworkSchema(event){
    this.frameWorkName = event.value;
  }
}
