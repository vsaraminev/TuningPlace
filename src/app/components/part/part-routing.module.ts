import { EditPartComponent } from './edit-part/edit-part.component';
import { CreatePartComponent } from './create-part/create-part.component';
import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PartAllComponent } from './part-all/part-all.component';
import { PartDetailsComponent } from './part-details/part-details.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AdminGuard } from 'src/app/core/guards/admin.guard';

const partRoutes: Route[] = [
    { path: 'all', component: PartAllComponent, canActivate: [AuthGuard] },
    { path: 'create', component: CreatePartComponent, canActivate: [AdminGuard] },
    { path: 'details/:id', component: PartDetailsComponent, canActivate: [AuthGuard] },
    { path: 'edit/:id', component: EditPartComponent, canActivate: [AdminGuard] }
]

@NgModule({
    imports: [
        RouterModule.forChild(partRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class PartRoutingModule { }