const loadPhotos = () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => console.log(data));
};
loadPhotos();
