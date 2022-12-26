var items = [
  {
    img: "/images/image-1.jpg",
    title: "City",
  },
  {
    img: "/images/image-2.jpg",
    title: "Mountain",
  },
  {
    img: "/images/image-3.jpg",
    title: "City-Sea",
  },
  {
    img: "/images/image-4.jpg",
    title: "Tree",
  },
  {
    img: "/images/image-5.jpg",
    title: "Sea",
  },
];
var index = 4;

showSlide(index);

document.querySelector("#left").addEventListener("click", function () {
  index--;
  showSlide(index);
  console.log(index);
});
document.querySelector("#right").addEventListener("click", function () {
  index++;
  showSlide(index);
  console.log(index);
});

function showSlide(i) {
  document.querySelector(".image").setAttribute("src", items[i].img);
  document.querySelector(".card-title").textContent = items[i].title;
}
