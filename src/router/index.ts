import CommitteeView from "@/views/CommitteeView.vue";
import HomeView from "@/views/HomeView.vue";
import LodgingView from "@/views/LodgingView.vue";
import PaymentView from "@/views/PaymentView.vue";
import PostEventView from "@/views/PostEventView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    // {
    //   path: "/details",
    //   name: "event-details",
    //   component: EventDetailsView,
    // },
    {
      path: "/pay",
      name: "pay",
      component: PaymentView,
    },
    {
      path: "/lodging",
      name: "lodging",
      component: LodgingView,
    },
    {
      path: "/committee",
      name: "committee",
      component: CommitteeView,
    },
    {
      path: "/post",
      name: "post-event",
      component: PostEventView,
    },
  ],
});

export default router;
