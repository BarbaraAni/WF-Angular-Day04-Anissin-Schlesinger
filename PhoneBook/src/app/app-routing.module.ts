import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ImportantNumbersComponent } from './important-numbers/important-numbers.component';
import { MyPhoneBookComponent } from './my-phone-book/my-phone-book.component';

const routes: Routes = [{        
	path:"home",
	component: HomeComponent
},{      
	path: "important",
	component: ImportantNumbersComponent
},{
	path: "mynumbers",
	component: MyPhoneBookComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

