import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './main/app.component';
import { AppCountdownComponent } from './countdown/app.countdown.component';
import { ApppNavbarComponent } from './navbar/app.navbar.component';
import { AppTimerComponent } from './timer/app.timer.component';
import { AppTasksComponent } from './tasks/app.tasks.component';
import { AppPomodoroIconsComponent } from './pomodoros/app.pomodoros.component';
import { AppAddTaskComponent } from './addTask/app.add-task.component';

import { TaskService } from './shared/app.shared';
import { TimePomodoros } from './shared/app.shared';
import { DatePomodoros } from './shared/app.shared';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AppCountdownComponent,
    ApppNavbarComponent,
    AppTimerComponent,
    AppTasksComponent,
    TimePomodoros,
    DatePomodoros,
    AppPomodoroIconsComponent,
    AppAddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})

export class AppModule { }
