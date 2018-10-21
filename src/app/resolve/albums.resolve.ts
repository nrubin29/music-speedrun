import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { GameService } from '../services/game.service';
import { ChunkPipe } from '../pipes/chunk.pipe';

@Injectable({
  providedIn: 'root'
})
export class AlbumsResolve implements Resolve<SpotifyApi.AlbumObjectFull[]> {

  constructor(private spotifyService: SpotifyService, private gameService: GameService, private chunkPipe: ChunkPipe) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<SpotifyApi.AlbumObjectFull[]> {
    const albumsSimplified = (await this.spotifyService.spotify.getArtistAlbums(this.gameService.artist.id, {limit: 50, include_groups: 'album,single'})).items;
    const albums = [];

    for (const chunk of this.chunkPipe.transform(albumsSimplified, 20)) {
      albums.push(...(await this.spotifyService.spotify.getAlbums(chunk.map(album => album.id))).albums);
    }

    console.log(albums);
    return albums;
  }
}
