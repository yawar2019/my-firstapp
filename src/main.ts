import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Home } from './app/home/home';
import { Contact } from './app/contact/contact';
import { Layout } from './app/layout/layout';
import { SimpleTemplateForm } from './app/simple-template-form/simple-template-form';
import { ReactiveFormExample } from './app/reactive-form-example/reactive-form-example';
import { FormBuilderExam } from './app/form-builder/form-builder';
import { Dynamicform } from './app/dynamicform/dynamicform';
import { UserApp } from './app/user-app/user-app';
import { AggridExampleComponent } from './app/aggrid-example-component/aggrid-example-component';


bootstrapApplication(AggridExampleComponent, appConfig  )
  .catch((err) => console.error(err));
