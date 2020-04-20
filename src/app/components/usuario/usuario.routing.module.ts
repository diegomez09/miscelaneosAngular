import { Routes, RouterModule } from '@angular/router';

import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { UsuarioEditComponent } from './usuario-edit.component';

export const USUARIO_ROUTES: Routes = [
    { path: 'new', component: UsuarioNuevoComponent },
    { path: 'detail', component: UsuarioDetalleComponent },
    { path: 'edit', component: UsuarioEditComponent },    
    { path: '**', pathMatch: 'full' , redirectTo: 'detail'},

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];
