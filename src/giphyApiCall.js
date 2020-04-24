export class giphyApiCall {
  async getTravelGif() {
    let jsonifiedResponse;
    try {
      let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_APY_KEY}&q=travel`);
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
    } catch (error) {
      return false;
    }
    return jsonifiedResponse;
  }
}