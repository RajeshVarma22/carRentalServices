// import all images from assets/images directory
import img01 from "../all-images/cars-img/Audi q5.webp";
import img02 from "../all-images/cars-img/Audi s5 sportback.webp";
import img03 from "../all-images/cars-img/mercedes-benz-A.webp";
import img04 from "../all-images/cars-img/mercedes-benz-gla.webp";
import img05 from "../all-images/cars-img/BMW M4.webp";
import img06 from "../all-images/cars-img/BMW 2 Series Gran Coupe.webp";
import img07 from "../all-images/cars-img/Skoda Superb.webp";
import img08 from "../all-images/cars-img/Skoda Kodiaq.webp";
import img09 from "../all-images/cars-img/Tata Safari.webp";
import img10 from "../all-images/cars-img/Tata Harrier EV.webp";
import img11 from "../all-images/cars-img/Hundai Creta N Line.webp";
import img12 from "../all-images/cars-img/Hyundai Tucson.webp";

const carData = [
  {
    id: 1,
    brand: "Audi",
    rating: 88,
    carName: "Audi Q5",
    imgUrl: img01,
    model: "Model 5",
    price: 150,
    speed: "24kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 2,
    brand: "Audi",
    rating: 93,
    carName: "Audi S5 Sportback",
    imgUrl: img02,
    model: "Model-2023",
    price: 180,
    speed: "18kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 3,
    brand: "Mercedes Benz ",
    rating: 83,
    carName: "Mercedes Benz A",
    imgUrl: img03,
    model: "Model-2023",
    price: 170,
    speed: "26kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 4,
    brand: "Mercedes Benz",
    rating: 85,
    carName: "Mercedes Benz GLA",
    imgUrl: img04,
    model: "Model-2024",
    price: 135,
    speed: "22kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 5,
    brand: "BMW",
    rating: 81,
    carName: "BMW M4",
    imgUrl: img05,
    model: "Model-2024",
    price: 180,
    speed: "13kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 6,
    brand: "BMW",
    rating: 92,
    carName: "BMW 2 Series Gran Coupe",
    imgUrl: img06,
    model: "Model-2021",
    price: 125,
    speed: "13kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 7,
    brand: "Skoda",
    rating: 76,
    carName: "Skoda Superb",
    imgUrl: img07,
    model: "Model 2",
    price: 90,
    speed: "22kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 8,
    brand: "Skoda",
    rating: 52,
    carName: "Skoda Kodiaq",
    imgUrl: img08,
    model: "Model 1",
    price: 80,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
  {
    id: 9,
    brand: "Tata",
    rating: 77,
    carName: "Tata Safari",
    imgUrl: img09,
    model: "Model 1",
    price: 80,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
  {
    id: 10,
    brand: "TATA",
    rating: 52,
    carName: "Tata Harrier EV",
    imgUrl: img10,
    model: "Model 1",
    price: 100,
    speed: "60 kmpc",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
  {
    id: 11,
    brand: "Hudai",
    rating: 52,
    carName: "Hyundai Creta N Line",
    imgUrl: img11,
    model: "Model 1",
    price: 70,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
  {
    id: 12,
    brand: "Hudai",
    rating: 52,
    carName: "Hyundai Tucson",
    imgUrl: img12,
    model: "Model 1",
    price: 80,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
];

export default carData;
