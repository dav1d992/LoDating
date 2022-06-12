import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailedComponent } from './members/member-detailed/member-detailed.component';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { MemberListResolver } from './_resolver/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolver/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}, 
    canActivate: [AuthGuard]},
  {path: 'members/:id', component: MemberDetailedComponent, resolve: {user: MemberDetailResolver}, 
    canActivate: [AuthGuard]},
  {path: 'member/edit', component: MemberEditComponent,  resolve: {user: MemberEditResolver},  
    canDeactivate: [PreventUnsavedChanges], canActivate: [AuthGuard]},
  {path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]},
  {path: 'lists', component: ListsComponent, canActivate: [AuthGuard]},
  {path: '**', component: HomeComponent},
  {path: 'home', redirectTo: 'home', pathMatch: 'full'}, //Denne skal være i bunden
];