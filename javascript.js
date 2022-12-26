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
var index = 0;
var slaytCount = items.length;
var settings = {
  duration: "2000",
  random: false,
};
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
console.log(slaytCount);
function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }

  document.querySelector(".image").setAttribute("src", items[index].img);
  document.querySelector(".card-title").textContent = items[index].title;
}
