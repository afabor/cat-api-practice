const fetchImage = () => {
  let image = document.getElementById("cat-img");
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log("cat images", json);
      image.src = json[0].url;
    });
};
