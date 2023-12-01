import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { AdminComponent } from './admin/admin.component';
import { BuyProductResolverService } from './buy-product-resolver.service';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { CartComponent } from './cart/cart.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { OrderDetaisComponent } from './order-detais/order-detais.component';
import { ProductResolveService } from './product-resolve.service';
import { ProductViewDetailsComponent } from './product-view-details/product-view-details.component';
import { RegisterComponent } from './register/register.component';
import { ShowProductDetailesComponent } from './show-product-detailes/show-product-detailes.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';
import { HomeClientComponent } from './home-client/home-client.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { DevisComponent } from './devis/devis.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogResolveService } from './blog-resolve.service';
import { AddBlog2Component } from './add-blog2/add-blog2.component';
import { ListBlogComponent } from './list-blog/list-blog.component';
import { AddCommentaireComponent } from './add-commentaire/add-commentaire.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ReservationResolveService } from './reservation-resolve.service';
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
import { MycommentComponent } from './mycomment/mycomment.component';
import { Blog3ResolveService } from './blog3-resolve.service';
import { UpdateCommentComponent } from './update-comment/update-comment.component';
import { AvisComponent } from './avis/avis.component';
import { BlogDetailleComponent } from './blog-detaille/blog-detaille.component';
import { UpdateCompteComponent } from './update-compte/update-compte.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { ReservationEmployeComponent } from './reservation-employe/reservation-employe.component';
import { UpdateReservationEmployeComponent } from './update-reservation-employe/update-reservation-employe.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { ListCommentComponent } from './list-comment/list-comment.component';

const routes: Routes = [
  {path: 'mi_comentario', component: MycommentComponent, canActivate:[AuthGuard], data:{roles:['User']}},
  { path: 'opiniones', component: AvisComponent },
  { path: 'confirmación', component: OrderConfirmationComponent },

  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'user', component: UserComponent ,  canActivate:[AuthGuard], data:{roles:['User']} },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'agregar_servicio', component: AddNewProductComponent , canActivate:[AuthGuard], data:{roles:['Admin']},
     resolve: {
            product: ProductResolveService
          }},
  { path: 'lista_servicios' , component: ShowProductDetailesComponent ,  canActivate:[AuthGuard], data:{roles:['Admin']}},
  { path: 'detalles_servicio', component: ProductViewDetailsComponent, resolve: { product: ProductResolveService }},
  { path: 'detalles_proyecto', component: ProjectDetailsComponent, resolve: { blog: BlogResolveService }},
  {path: 'actualizar_comentario/:commentId', component: UpdateCommentComponent, canActivate:[AuthGuard], data:{roles:['User']}},

  { path: 'detalles_blog', component: BlogDetailleComponent, resolve: { blog: Blog3ResolveService }},


  { path: 'mi_resrvas', component: MyOrdersComponent ,  canActivate:[AuthGuard], data:{roles:['User']} },
  { path: 'inscripción', component: RegisterComponent },

  { path: 'agregar_empleado', component:AddEmployeComponent,   canActivate:[AuthGuard], data:{roles:['Admin']}},
  { path: '', component:HomeClientComponent},
  { path: 'contacto', component:ContactComponent},  
  { path: 'proyectos', component:ProjectComponent},  
 { path: 'sobre_nosotros', component:AboutComponent}, 
 { path: 'lista_usuarios/:roleName', component:ListRoleComponent  ,  canActivate:[AuthGuard], data:{roles:['Admin']}}, 

 { path: 'presupuesto', component:DevisComponent ,  resolve: {
  reservation: ReservationResolveService}}, 

{ path: 'presupuesto_u', component:DevisLoginComponent ,  canActivate:[AuthGuard], data:{roles:['User']},  resolve: {
  reservation: ReservationResolveService
}}, 

 { path: 'agregar_proyecto', component:AddBlogComponent ,canActivate:[AuthGuard], data:{roles:['Admin']}, resolve: {
  blog: BlogResolveService
}}, 
{ path: 'lista_reservas', component:ReservationEmployeComponent ,  canActivate:[AuthGuard], data:{roles:['Employe']}}, 
{ path: 'lista_proyectos', component:ListPhotoComponent  ,  canActivate:[AuthGuard], data:{roles:['Admin']}}, 

{ path: 'lista_commentario', component:ListCommentComponent  ,  canActivate:[AuthGuard], data:{roles:['Admin']}}, 
{  path: 'lista_reserva',  component: ListReservationComponent ,canActivate: [AuthGuard], data: { roles: ['Admin'] } },
{ path: 'prefil', component:ProfileComponent ,  canActivate:[AuthGuard], data:{roles:['Admin']}}, 
{ path: 'servicios', component:ListServiceComponent}, 
{ path: 'blog', component:BlogHomeComponent}, 

{ path: 'lista_usuarios', component:ListUserComponent,  canActivate:[AuthGuard], data:{roles:['Admin']}}, 
{path: 'actualizar_reserva/:id', component: AddEmpComponent, canActivate:[AuthGuard], data:{roles:['Admin']}},
{path: 'actualizar_reservas/:id', component: UpdateReservationEmployeComponent, canActivate:[AuthGuard], data:{roles:['Employe']}},

{path: 'actualizar_prefil/:id', component: UpdateProfileComponent, canActivate:[AuthGuard], data:{roles:['Admin']}},
{path: 'actualizar_cuenta/:userName', component: UpdateCompteComponent},
{path: 'actualizar_contraseña/:userName', component: UpdatePasswordComponent},

{ path: 'agregar_blog', component:AddBlog2Component , 
canActivate:[AuthGuard], data:{roles:['Admin']},resolve: {
  blog: Blog3ResolveService 
}}, 

{ path: 'cuenta', component: UserDetailsComponent },



{ path: 'lista_blog', component:ListBlogComponent,canActivate:[AuthGuard], data:{roles:['Admin']}}, 





];   

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
