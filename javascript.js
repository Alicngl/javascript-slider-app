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
  random: true,
};
var interval;
init(settings);

document.querySelector("#left").addEventListener("click", function () {
  index--;
  showSlide(index);
});
document.querySelector("#right").addEventListener("click", function () {
  index++;
  showSlide(index);
});
document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});
document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});

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

function init(set) {
  var prev;
  interval = setInterval(function () {
    if (set.random) {
      //random index
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      prev = index;
    } else {
      //artan index
      if (slaytCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      index++;
    }
    showSlide(index);
  }, settings.duration);
}
