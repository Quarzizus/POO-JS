function videoPlay(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Play desde la url: " + urlSecreta);
}
function videoPause(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
  console.log("Pause desde la url: " + urlSecreta);
}

export class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }
  play() {
    videoPlay(this.videoID);
  }
  pause() {
    videoPause(this.videoID);
  }
}
