import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { MainPage } from './main-page/main-page';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: '',
                component: MainPage
            }
        ]
    }
];
