import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
    {
        path: ':folderName',
        component: TestComponent
    },
];
