import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookListComponent } from './book-list/book-list.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { BookService } from './book.service';
import { ShowBookComponent } from './show-book/show-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { ShowAuthorComponent } from './show-author/show-author.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { LoginComponent } from './login/login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { AuthorService } from './author.service';
import { AuthService } from './auth.service';
import { AdminguardGuard } from './adminguard.guard';
import { UserguardGuard } from './userguard.guard';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BookListComponent,
    AuthorListComponent,
    ShowBookComponent,
    UpdateBookComponent,
    AddBookComponent,
    AddAuthorComponent,
    ShowAuthorComponent,
    UpdateAuthorComponent,
    UserLoginComponent,
    LoginComponent,
    UserSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BookService,AuthorService,AuthService,AdminguardGuard,UserguardGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
