import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from './components/header/my-header/my-header.component';
import { MyContentComponent } from './pages/my-content/my-content.component';
import { MyFooterComponent } from './components/footer/my-footer/my-footer.component';
import { MyAboutComponent } from './pages/my-about/my-about.component';
import { MyFeaturesComponent } from './pages/features/my-features/my-features.component';
// import { MyheplComponent } from './components/pages/help/my-help/my-help.component';
import { MyPricingComponent } from './pages/pricing/my-pricing/my-pricing.component';
import { MyTestimoialsComponent } from './pages/testimonials/my-testimoials/my-testimoials.component';
import { SingUpComponent } from './pages/signup/sing-up/sing-up.component';
import { SingInComponent } from './pages/login/sing-in/sing-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyHelpComponent } from './pages/help/my-help/my-help.component';
@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyContentComponent,
    MyFooterComponent,
    MyAboutComponent,
    MyFeaturesComponent,
    // MyheplComponent,
    MyPricingComponent,
    MyTestimoialsComponent,
    SingUpComponent,
    SingInComponent,
    MyHelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
