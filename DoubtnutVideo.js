import fetch from 'node-fetch';

class DoubtnutVideo {
  constructor(pageURL, regex) {
    this.pageURL = pageURL;
    this.regex = regex || /answer-\d+_\d+\.mp4/;
  }

  async url() {
    const response = await fetch(this.pageURL);
    const responseText = await response.text();
    const result = this.regex.exec(responseText);
    const videoURL = 'https://videos.doubtnut.com/' + result[0];
    return videoURL;
  }
}

export { DoubtnutVideo };

