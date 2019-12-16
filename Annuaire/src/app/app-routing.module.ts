import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './contact/list/list.component';
import { DetailComponent } from './contact/detail/detail.component';
import { EditComponent } from './contact/edit/edit.component';
import { ContactFormComponent } from './contact/edit/contact-form.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'contacts', component: ListComponent },
  { path: 'contact/:id', component: DetailComponent },
  { path: 'contact/edit/:id', component: EditComponent },
  { path: 'form', component: ContactFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
