import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { LoginComponent } from './login/login.component';
import { ShowAuthorComponent } from './show-author/show-author.component';
import { ShowBookComponent } from './show-book/show-book.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { AdminguardGuard } from './adminguard.guard';
import { UserguardGuard } from './userguard.guard';


const routes: Routes = [
  {
    path:"",
    redirectTo:'/login/user-login',
    pathMatch:'full'
  },
  {
    path:"books",
    component:BookListComponent,
    canActivate:[UserguardGuard]
  },
  {
    path:"authors",
    component:AuthorListComponent,
    canActivate:[UserguardGuard]
  },
  {
    path:"book",
    component:ShowBookComponent,
    canActivate:[UserguardGuard]
  },
  {
    path:"addauthor",
    component:AddAuthorComponent,
    canActivate:[AdminguardGuard]
  },
  {
    path:"addbook",
    component:AddBookComponent,
    canActivate:[AdminguardGuard]
  },
  {
    path:"update",
    component:UpdateBookComponent,
    canActivate:[AdminguardGuard]
  },
  {
    path:"author",
    component:ShowAuthorComponent,
    canActivate:[UserguardGuard]
  },
  {
    path:"update-author",
    component:UpdateAuthorComponent,
    canActivate:[AdminguardGuard]
  },
  {
    path:"login",
    component:LoginComponent,
    children:[
      {
        path:"user-login",
        component:UserLoginComponent
      },
      {
        path:"user-signup",
        component:UserSignupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
