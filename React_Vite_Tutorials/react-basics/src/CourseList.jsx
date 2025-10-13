import Course from './Course.jsx';
import React, { useState , useEffect} from "react";

function CourseList(){
    const [courses , setCourses] = useState([
  {
    id: 1,
    name: "HTML Beginner to Pro",
    price: 3999,
    img: "https://i.ytimg.com/vi/G3e-cpL7ofc/hq720.jpg",
    rating: "Ratings : 5.0"
  },
  {
    id: 2,
    name: "CSS Full Course for Beginners",
    price: 1999,
    img: "https://i.ytimg.com/vi/1Rs2ND1ryYc/hq720.jpg",
    rating: "Ratings : 4.7"
  },
  {
    id: 3,
    name: "JavaScript MasterClass",
    price: 4999,
    img: "https://i.ytimg.com/vi/EerdGm-ehJQ/hq720.jpg",
    rating: "Ratings : 4.9"
  },
  {
    id: 4,
    name: "React.js from Scratch",
    price: 5999,
    img: "https://i.ytimg.com/vi/bMknfKXIFA8/hq720.jpg",
    rating: "Ratings : 4.8"
  },
  {
    id: 5,
    name: "MongoDB Crash Course",
    price: 2999,
    img: "https://i.ytimg.com/vi/AYDP1S5BbTo/hq720.jpg",
    rating: "Ratings : 4.5"
  },
  {
    id: 6,
    name: "Full Stack MERN Project",
    price: 7999,
    img: "https://i.ytimg.com/vi/7CqJlxBYj-M/hq720.jpg",
    rating: "Ratings : 5.0"
  },
  {
    id: 7,
    name: "Tailwind CSS Complete Guide",
    price: 2499,
    img: "https://i.ytimg.com/vi/pfaSUYaSgRo/hq720.jpg",
    rating: "Ratings : 4.8"
  },
  {
    id: 8,
    name: "Bootstrap Responsive Design",
    price: 1999,
    img: "https://i.ytimg.com/vi/-qfEOE4vtxE/hq720.jpg",
    rating: "Ratings : 4.4"
  },
  {
    id: 9,
    name: "Git & GitHub Essentials",
    price: 1499,
    img: "https://i.ytimg.com/vi/apGV9Kg7ics/hq720.jpg",
    rating: "Ratings : 4.9"
  },
  {
    id: 10,
    name: "API Development with Postman",
    price: 2799,
    img: "https://i.ytimg.com/vi/VywxIQ2ZXw4/hq720.jpg",
    rating: "Ratings : 4.7"
  },
  {
    id: 11,
    name: "TypeScript for React Developers",
    price: 3999,
    img: "https://i.ytimg.com/vi/Z5iWr6Srsj8/hq720.jpg",
    rating: "Ratings : 4.8"
  },
  {
    id: 12,
    name: "Redux Toolkit & State Management",
    price: 4499,
    img: "https://i.ytimg.com/vi/9jULHSe41ls/hq720.jpg",
    rating: "Ratings : 4.7"
  },
  {
    id: 13,
    name: "Firebase Authentication & Hosting",
    price: 3499,
    img: "https://i.ytimg.com/vi/PKwu15ldZ7k/hq720.jpg",
    rating: "Ratings : 4.8"
  },
  {
    id: 14,
    name: "Responsive Web Design Mastery",
    price: 2899,
    img: "https://i.ytimg.com/vi/srvUrASNj0s/hq720.jpg",
    rating: "Ratings : 4.9"
  },
  {
    id: 15,
    name: "Webpack Crash Course",
    price: 2399,
    img: "https://i.ytimg.com/vi/IZGNcSuwBZs/hq720.jpg",
    rating: "Ratings : 4.6"
  },
  {
    id: 16,
    name: "Docker for Web Developers",
    price: 4999,
    img: "https://i.ytimg.com/vi/Gjnup-PuquQ/hq720.jpg",
    rating: "Ratings : 4.8"
  },
  {
    id: 17,
    name: "Python for Web Developers",
    price: 3999,
    img: "https://i.ytimg.com/vi/_uQrJ0TkZlc/hq720.jpg",
    rating: "Ratings : 4.9"
  },
  {
    id: 18,
    name: "Django REST Framework API",
    price: 5499,
    img: "https://i.ytimg.com/vi/0sOvCWFmrtA/hq720.jpg",
    rating: "Ratings : 4.8"
  },
  {
    id: 19,
    name: "Flask Full Stack Project",
    price: 4799,
    img: "https://i.ytimg.com/vi/MwZwr5Tvyxo/hq720.jpg",
    rating: "Ratings : 4.6"
  },
  {
    id: 20,
    name: "WordPress Custom Development",
    price: 2999,
    img: "https://i.ytimg.com/vi/8AZ8GqW5iak/hq720.jpg",
    rating: "Ratings : 4.4"
  },
  {
    id: 21,
    name: "PHP & MySQL for Beginners",
    price: 3599,
    img: "https://i.ytimg.com/vi/OK_JCtrrv-c/hq720.jpg",
    rating: "Ratings : 4.7"
  },
  {
    id: 22,
    name: "SASS & SCSS Masterclass",
    price: 2299,
    img: "https://i.ytimg.com/vi/Zz6eOVaaelI/hq720.jpg",
    rating: "Ratings : 4.6"
  },
  {
    id: 23,
    name: "Three.js 3D Web Development",
    price: 6999,
    img: "https://i.ytimg.com/vi/Q7AOvWpIVHU/hq720.jpg",
    rating: "Ratings : 4.9"
  },
  {
    id: 24,
    name: "React Native for Beginners",
    price: 5799,
    img: "https://i.ytimg.com/vi/0-S5a0eXPoc/hq720.jpg",
    rating: "Ratings : 4.8"
  },
  {
    id: 25,
    name: "Progressive Web Apps (PWA)",
    price: 3999,
    img: "https://i.ytimg.com/vi/cmGr0RszHc8/hq720.jpg",
    rating: "Ratings : 4.6"
  },
  {
    id: 26,
    name: "GraphQL with Apollo Client",
    price: 4899,
    img: "https://i.ytimg.com/vi/ed8SzALpx1Q/hq720.jpg",
    rating: "Ratings : 4.8"
  },
  {
    id: 27,
    name: "REST API Integration in React",
    price: 3299,
    img: "https://i.ytimg.com/vi/TlB_eWDSMt4/hq720.jpg",
    rating: "Ratings : 4.7"
  },
  {
    id: 28,
    name: "React Hooks Deep Dive",
    price: 3799,
    img: "https://i.ytimg.com/vi/f687hBjwFcM/hq720.jpg",
    rating: "Ratings : 4.8"
  },
  {
    id: 29,
    name: "WebSockets in Node.js",
    price: 3999,
    img: "https://i.ytimg.com/vi/ZKEqqIO7n-k/hq720.jpg",
    rating: "Ratings : 4.8"
  }
]);

    //courses.sort((x,y) => y.price - x.price)

    //const vfmCourses = courses.filter((course) => course.price>1999 )

    function deleteParticualarCard(id){
        const NewProductsList =  courses.filter((course)=>course.id != id);
        setCourses(NewProductsList);
    }

    // useEffect(()=>{
    //   console.log("Worked when deletion gets in action");
    // },[deleteParticualarCard]); //strictly you dont use useState var bcos you know the logic


    useEffect(()=> {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {console.log(response)
         return response.json()})

        .then(data => console.log(data))
      },[])
  
    const coursesList = courses.map ((course) => 
    <Course key = {course.id}
            id = {course.id} 
            name = {course.name}
            price = {course.price}
            img = {course.img}
            rating = {course.rating}
            deletes = {deleteParticualarCard}
    />)

    return (
        <>
            {coursesList}
        </>
    );
}

export default CourseList;