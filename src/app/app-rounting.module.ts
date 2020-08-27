import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {path:'',component:LoginComponent},
    {
      path:'dashboard',component:DashboardComponent
    },
   {path:'ATTENDANCE',component:ATTENDANCEComponent},
   {path:'student',component:StudentComponent},
   {path:'homeWork',component:HomeworkComponent},
   {path:'timeTable',component:TimeTableComponent},
   {path:'calendar',component:CalendarComponent},
   {path:'userDocs',component:UserDocsComponent},
   {path:'examResult',component:ExamResultComponent},
   {path:'fees',component:FeesComponent},
   {path:'library',component:LibraryComponent},
   {path:'trasport',component:TransportComponent},
   {path:'techers',component:TechersComponent},
   {path:'assignment',component:AssignmentComponent},
   {path:'meeting',component:MeetingsComponent},
   {path:'syllabus',component:SyllabusComponent},
   {path:'chat',component:ChatComponent},
   {path:'newsLatter',component:NewsLattersComponent},
   {path:'holidayList',component:HolidayListComponent},
   {path:'annancement',component:AnnancementComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  