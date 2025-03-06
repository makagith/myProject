import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAboutComponent } from './pages/my-about/my-about.component';
import { MyFeaturesComponent } from './pages/features/my-features/my-features.component';
import { MyPricingComponent } from './pages/pricing/my-pricing/my-pricing.component';
import { MyTestimoialsComponent } from './pages/testimonials/my-testimoials/my-testimoials.component';

import { MyHelpComponent } from './pages/help/my-help/my-help.component';
import { SingInComponent } from './pages/login/sing-in/sing-in.component';
import { MyContentComponent } from './pages/my-content/my-content.component';

const routes: Routes = [
  { path: '', component: MyContentComponent },
  { path: 'about', component: MyAboutComponent },
  { path: 'features', component: MyFeaturesComponent },
  { path: 'pricing', component: MyPricingComponent },
  { path: 'testimonials', component: MyTestimoialsComponent },
  {path: 'help', component: MyHelpComponent},
  { path: 'login',component: SingInComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
