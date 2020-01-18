import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: 
    [RouterModule.forRoot([
      {path: '', component: HomeComponent },
      // {path: 'products', loadChildren: ''}
    ], 
    { preloadingStrategy: PreloadAllModules }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
