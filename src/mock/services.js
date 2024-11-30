import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import SchoolIcon from "@mui/icons-material/School";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import services1 from "../Images/services1.jpg";
import services2 from "../Images/services2.jpg";
import services3 from "../Images/services3.jpg";
import services4 from "../Images/services4.jpg";

export const services = [
  {
    title: "الخدمات الصحية",
    description:
      "يتوفر مركز صحي يعمل على مدار الساعة لتقديم الرعاية الطبية اللازمة.",
    icon: <MedicalServicesIcon style={{ fontSize: 50, color: "#4caf50" }} />,
    image: services4,
  },
  {
    title: "الخدمات التعليمية",
    description:
      "يوجد داخل المخيم مدرسة تقدم التعليم للأطفال وتساعدهم على بناء مستقبلهم.",
    icon: <SchoolIcon style={{ fontSize: 50, color: "#2196f3" }} />,
    image: services3,
  },
  {
    title: "فرص التطوع",
    description: "انضم كمتطوع وساهم في تحسين حياة النازحين داخل المخيم.",
    icon: <VolunteerActivismIcon style={{ fontSize: 50, color: "#ff9800" }} />,
    image: services2,
  },
  {
    title: "المساعدات الغذائية",
    description:
      "يتم توزيع وجبات يومية للعائلات لضمان حصولهم على الغذاء الكافي.",
    icon: <LocalDiningIcon style={{ fontSize: 50, color: "#f44336" }} />,
    image: services1,
  },
];
