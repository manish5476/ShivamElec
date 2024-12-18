import { ProductMasterComponent } from '../component/product-master/product-master.component';
import { UserMasterComponent } from '../component/user-master/user-master.component';
import { ProductDetaiViewComponent } from '../component/product-detai-view/product-detai-view.component';
import { ImageTabsComponent } from '../tabs/image-tabs/image-tabs.component';
import { HomeComponent } from '../component/home/home.component';
import { NgModule } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';
import { ComponentsModule } from '../component/components.module';
// import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { DockModule } from 'primeng/dock';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    ProductMasterComponent,
    UserMasterComponent,
    ProductDetaiViewComponent,
    ImageTabsComponent,
    HomeComponent,
  ],
  imports: [
    TableModule,
    TabViewModule,
    CardModule,
    PanelModule,
    InputTextareaModule,
    FileUploadModule,
    MenubarModule,
    InputTextModule,
    RadioButtonModule,
    CommonModule,
    DockModule,
    CheckboxModule,
    ReactiveFormsModule,
    ComponentsModule,
    InputNumberModule,
    CalendarModule,
    RatingModule,
    GalleriaModule,
    DropdownModule,
    SplitterModule,
    DialogModule,
    FormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    FloatLabelModule,
    InputTextModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SidebarModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}

// import { NgModule } from '@angular/core';
// import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [
//     provideClientHydration()
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
