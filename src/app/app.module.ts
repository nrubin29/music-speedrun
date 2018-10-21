import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistComponent } from './views/artist/artist.component';
import { AlbumsComponent } from './views/albums/albums.component';
import { GameComponent } from './views/game/game.component';
import { TrackComponent } from './components/track/track.component';
import { MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatGridListModule, MatInputModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { CallbackComponent } from './views/callback/callback.component';
import { ResultComponent } from './components/result/result.component';
import { EndComponent } from './views/end/end.component';
import { ChunkPipe } from './pipes/chunk.pipe';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumsComponent,
    GameComponent,
    TrackComponent,
    HomeComponent,
    CallbackComponent,
    ResultComponent,
    EndComponent,
    ChunkPipe,
    GridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatGridListModule,
    MatAutocompleteModule
  ],
  providers: [
    ChunkPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
