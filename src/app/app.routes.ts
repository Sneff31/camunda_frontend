import { Routes } from '@angular/router';

import { DeploymentProcessComponent } from './deployment-process/deployment-process.component';
import { ListProcessComponent } from './list-process/list-process.component';
import { StartProcessComponent } from './start-process/start-process.component';

export const routes: Routes = [
    { path: 'start-process', component: StartProcessComponent},
    { path: 'list-process', component: ListProcessComponent},
    { path: 'deployment-process', component: DeploymentProcessComponent}
];
