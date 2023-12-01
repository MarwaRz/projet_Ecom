import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormControl, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { DragDirective } from './drag.directive';
import { ShowProductDetailesComponent } from './show-product-detailes/show-product-detailes.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { ShowProductImagesDialogComponent } from './show-product-images-dialog/show-product-images-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ProductViewDetailsComponent } from './product-view-details/product-view-details.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderDetaisComponent } from './order-detais/order-detais.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { ServiceComponent } from './service/service.component';
import { HeaderrComponent } from './headerr/headerr.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { DevisComponent } from './devis/devis.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { AddBlog2Component } from './add-blog2/add-blog2.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA,} from "@angular/material/dialog";
import { ListBlogComponent } from './list-blog/list-blog.component';
import { MatSelectModule } from '@angular/material/select';
import { AddCommentaireComponent } from './add-commentaire/add-commentaire.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { ListPhotoComponent } from './list-photo/list-photo.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ListEmployeComponent } from './list-employe/list-employe.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { DevisLoginComponent } from './devis-login/devis-login.component';

import { StarRatingComponent } from './star-rating/star-rating.component';
import { MycommentComponent } from './mycomment/mycomment.component';
import { UpdateCommentComponent } from './update-comment/update-comment.component';
import { AvisComponent } from './avis/avis.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BlogDetailleComponent } from './blog-detaille/blog-detaille.component';
import { UpdateCompteComponent } from './update-compte/update-compte.component';
import { TruncatePipe } from './_services/truncate.pipe';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { ReservationEmployeComponent } from './reservation-employe/reservation-employe.component';
import { UpdateReservationEmployeComponent } from './update-reservation-employe/update-reservation-employe.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { ListCommentComponent } from './list-comment/list-comment.component';

@NgModule({
  declarations: [
    TruncatePipe,
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    AddNewProductComponent,
    DragDirective,
    ShowProductDetailesComponent,
    ShowProductImagesDialogComponent,
    ProductViewDetailsComponent,
    BuyProductComponent,
    OrderConfirmationComponent,
    RegisterComponent,
    CartComponent,
    MyOrdersComponent,
    OrderDetaisComponent,
    HeaderrComponent, HomeClientComponent,
    ContactComponent,
    HeaderComponent,
    ProjectComponent,
    ServiceComponent,
    AboutComponent,
    FooterComponent,
    DevisComponent,
    AddBlogComponent,
    AddBlog2Component,
    ListBlogComponent,
    AddCommentaireComponent,
    AddEmployeComponent,
    ListUserComponent,
    ListReservationComponent,
    ListPhotoComponent,
    ProfileComponent,
    UpdateProfileComponent,
    ListServiceComponent,
    AddEmpComponent,
    ListEmployeComponent,
    ListRoleComponent,
    ProjectDetailsComponent,
    DevisLoginComponent,
    StarRatingComponent,
    MycommentComponent,
    UpdateCommentComponent,
    AvisComponent,
    BlogDetailleComponent,
    UpdateCompteComponent,
    UserDetailsComponent,
    UpdatePasswordComponent,
    ReservationEmployeComponent,
    UpdateReservationEmployeComponent,
    BlogHomeComponent,
    ListCommentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
   
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,

    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,

    MatFormFieldModule,
  
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
   
  
    MatFormFieldModule,
    MatIconModule,
  ],
  providers: 
    [{ provide: MatDialogRef, useValue: {}}, { provide: MAT_DIALOG_DATA, useValue: {} }, 

      AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

