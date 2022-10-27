import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { ProductComponent } from './shared/components/product/product.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BiglogoComponent } from './shared/components/biglogo/biglogo.component';
import { TabComponent } from './shared/components/tab/tab.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormErrorsComponent } from './shared/components/form-errors/form-errors.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsPageComponent,
    EditPageComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    BiglogoComponent,
    TabComponent,
    FormErrorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
