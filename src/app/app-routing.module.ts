import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DateComponent } from './components/date/date.component';

const routes: Routes = [
  {
    path: 'reactiveform',
    component: ReactiveFormComponent
  },

  {
    path: 'date',
    component: DateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
