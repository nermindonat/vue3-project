import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import Contact from "../views/Contact.vue";
import Services from "../views/Services.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/hakkimizda",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/hizmetlerimiz",
    name: "Services",
    component: Services,
  },
  {
    path: "/iletisim",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
