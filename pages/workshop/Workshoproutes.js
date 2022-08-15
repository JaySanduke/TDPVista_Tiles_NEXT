import Createworkshop from "./Createworkshop";
import Workshopoverview from "./Workshopoverview";
import Workshopdetails from "./Workshopdetails";
import Editworkshop from "./Editworkshop";
import WorkshopCreatequiz from "./WorkshopCreatequiz";
import Workshoptask from "./WorkshopTask";
// import WorkshopQuiz from "./WorkshopQuiz.js";
import WQuizDetails from "./WorkshopQuizDetails";
import EditWQuiz from "./WorkshopEditQuiz";
import WorkshopCreateTask from './WorkshopCreateTask';
import WorkshoptaskDetails from "./WorkshopTaskDetails";
import scheduler from "./scheduler";

var routes = [
  {
    path: "/Workshops",
    name: "Workshops",
    icon: "ni ni-tv-2 text-primary",
    component: Workshopoverview,
    layout: "/workshop",
    class: "",
  },
  {
    path: "/workshopdetails",
    name: "Workshop Details",
    icon: "ni ni-tv-2 text-primary",
    component: Workshopdetails,
    layout: "/workshop",
    class: "d-none",
  },
  {
    path: "/editworkshop",
    name: "Edit Workshop",
    icon: "ni ni-tv-2 text-primary",
    component: Editworkshop,
    layout: "/workshop",
    class: "d-none",
  },
  {
    path: "/managewstudents",
    name: "Manage Students",
    icon: "ni ni-tv-2 text-primary",
    component: Createworkshop,
    layout: "/workshop",
    class: "",
  },
  {
    path: "/managewmentors",
    name: "Manage Mentors",
    icon: "ni ni-tv-2 text-primary",
    component: Createworkshop,
    layout: "/workshop",
    class: "",
  },
  {
    path: "/wtask",
    name: "Task",
    icon: "ni ni-tv-2 text-primary",
    component: Workshoptask,
    layout: "/workshop",
    class: "d-none",
  },
  {
    path: "/wcreatequiz",
    name: "Create Quiz",
    icon: "ni ni-tv-2 text-primary",
    component: WorkshopCreatequiz,
    layout: "/workshop",
    class: "d-none",
  },
  // {
  //   path: "/wquiz",
  //   name: "Quiz",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: WorkshopQuiz,
  //   layout: "/workshop",
  //   class: "d-none",
  // },
  {
    path: "/wquizdetails",
    name: "Quiz Details",
    icon: "ni ni-tv-2 text-primary",
    component: WQuizDetails,
    layout: "/workshop",
    class: "d-none",
  },
  {
    path: "/weditquiz",
    name: "Edit Quiz",
    icon: "ni ni-tv-2 text-primary",
    component: EditWQuiz,
    layout: "/workshop",
    class: "d-none",
  },
  {
    path: "/wcreatetask",
    name: "Create Task",
    icon: "ni ni-tv-2 text-primary",
    component: WorkshopCreateTask,
    layout: "/workshop",
    class: "d-none",
  },
  {
    path: "/wtaskdetails",
    name: "Task Details",
    icon: "ni ni-tv-2 text-primary",
    component: WorkshoptaskDetails,
    layout: "/workshop",
    class: "d-none",
  },
  {
    path: "/scheduler",
    name: "Scheduler",
    icon: "ni ni-tv-2 text-primary",
    component: scheduler,
    layout: "/workshop",
    class: "",
  },
];
export default routes;
