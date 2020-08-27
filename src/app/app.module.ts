import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-rounting.module';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavService } from './services/sidenav.service';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ATTENDANCEComponent } from './pages/attendance/attendance.component';
import { StudentComponent } from './pages/student/student.component';
import { HomeworkComponent } from './pages/homework/homework.component';
import { TimeTableComponent } from './pages/time-table/time-table.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { UserDocsComponent } from './pages/user-docs/user-docs.component';
import { ExamResultComponent } from './pages/exam-result/exam-result.component';
import { FeesComponent } from './pages/fees/fees.component';
import { LibraryComponent } from './pages/library/library.component';
import { TransportComponent } from './pages/transport/transport.component';
import { TechersComponent } from './pages/techers/techers.component';
import { AssignmentComponent } from './pages/assignment/assignment.component';
import { MeetingsComponent } from './pages/meetings/meetings.component';
import { SyllabusComponent } from './pages/syllabus/syllabus.component';
import { ChatComponent } from './pages/chat/chat.component';
import { NewsLattersComponent } from './pages/news-latters/news-latters.component';
import { HolidayListComponent } from './pages/holiday-list/holiday-list.component';
import { AnnancementComponent } from './pages/annancement/annancement.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    HeaderComponent,
    LeftMenuComponent,
    DashboardComponent,
    ATTENDANCEComponent,
    StudentComponent,
    HomeworkComponent,
    TimeTableComponent,
    CalendarComponent,
    UserDocsComponent,
    ExamResultComponent,
    FeesComponent,
    LibraryComponent,
    TransportComponent,
    TechersComponent,
    AssignmentComponent,
    MeetingsComponent,
    SyllabusComponent,
    ChatComponent,
    NewsLattersComponent,
    HolidayListComponent,
    AnnancementComponent,
    LoginComponent,
    ForgotPasswordComponent,
   
  ],
  providers: [ SidenavService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
