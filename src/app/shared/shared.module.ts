import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavlinkComponent } from './components/navlink/navlink.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { SharedRoutingModule } from './shared-routing.module';
import { AnimeCardComponent } from './components/anime-card/anime-card.component';
import { AnimeListComponent } from './components/anime-list/anime-list.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    NavlinkComponent,
    AnimeCardComponent,
    AnimeListComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    FlexLayoutModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, { delay: 100 }),
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    NavlinkComponent,
    AnimeListComponent,
    AnimeCardComponent,
  ],
})
export class SharedModule {}
