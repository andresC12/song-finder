<template>
  <div class="ttt-container">
    <div class="ttt-inner-container">
      <div class="select-languajes">
        <select id="locale" v-model="$i18n.locale">
          <option v-for="locale in locales" :key="locale.key" :value="locale.key">
            {{locale.label}}
          </option>
        </select>
      </div>
      <div class="text-header">
        <h4><span>twototango</span> {{$t('dash.title')}}.</h4>
        <h5>
          {{$t('dash.description')}}
        </h5>
      </div>
      <div class="ttt-search-artist">
        <div class="input-container">
          <i class="fas fa-search"></i>
          <input type="text" v-model="search" :placeholder="$t('dash.holder')" />
        </div>
        <button @click="getAll()">{{$t('dash.button')}}</button>
      </div>
      <div class="error-message" v-show="error">
        <h4>El campo es obligatorio</h4>
      </div>
      <div class="ttt-songs-list">
        <div class="ttt-single-song" v-for="song in songs" v-bind:key="song.id">
          <div class="song-image">
            <img :src="song.album.cover" />
          </div>
          <div class="song-information">
            <h4>{{ song.title_short }}</h4>
            <h5>
              <span v-show="song.explicit_lyrics">{{$t('dash.lyrics')}}</span>
              {{ song.artist.name }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./Dashboard.css"></style>

<script lang="ts" src="./Dashboard.ts"></script>

<i18n>
{
  "es": {
    "dash": {
      "title": "Musica",
      "description": "Encuentra las canciones más populares de tus artistas favoritos",
      "button": "Buscar",
      "lyrics": "Explícita",
      "holder": "Buscar artistas"
    }
  },
  "en":{
    "dash": {
      "title": "Music",
      "description": "Find the most popular songs from your favorite artists",
      "button": "Search",
      "lyrics": "Lyrics",
      "holder": "Search artists"
    }
  }
}
</i18n>
