 // Example Album
 var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };
 
 // Another Example Album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };
  // Another Example Album
 var albumElvis = {
     title: 'Elvis Presley',
     artist: 'Elvis Presley',
     label: 'RCA',
     year: '1956',
     albumArtUrl: 'assets/images/album_covers/xElvisPresleyLP.jpg',
     songs: [
         { title: 'Blue Suede Shoes', duration: '2:01' },
         { title: 'I\'m Counting on You', duration: '2:25' },
         { title: 'I Got A Woman', duration: '2:26'},
         { title: 'One-Sided Love Affair', duration: '2:11' },
         { title: 'I Love You Because', duration: '2:43'}
     ]
 };
 var albumArray = [albumPicasso, albumMarconi, albumElvis]
 
  var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return template;
 };
  var currentAlbum;
  var setCurrentAlbum = function(album) {
     currentAlbum = album;

     var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
 
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     albumSongList.innerHTML = '';
 
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };
 var currentIndex;
 window.onload = function() {
     setCurrentAlbum(albumPicasso);
     currentIndex = albumArray.indexOf(currentAlbum);
     document.getElementsByClassName("album-cover-art")[0].addEventListener("click", toggleAlbum);
 };
 
     var toggleAlbum = function(){
         var nextIndex;
         if (currentIndex >= albumArray.length -1){
             nextIndex = 0;
         }
         else {
             nextIndex = currentIndex + 1;
         }
         setCurrentAlbum(albumArray[nextIndex]);
         currentIndex = nextIndex;
     };
 
 