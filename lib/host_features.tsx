import {
  Library,
  Pencil,
  FileJson,
  Users,
  TriangleAlertIcon,
  Lock,
} from "lucide-react";

const HostFeatures = [
  {
    name: "Problem Library",
    icon: <Library height={20} width={20} />,
  },
  {
    name: "Custom Problems",
    icon: <Pencil height={20} width={20} />,
  },
  {
    name: "Custom Testcases",
    icon: <FileJson height={20} width={20} />,
  },
  {
    name: "Locked contests",
    icon: <Lock height={20} width={20} />,
  },
  {
    name: "Private Contests",
    icon: <Users height={20} width={20} />,
  },

  {
    name: "Custom Timelimits",
    icon: <TriangleAlertIcon height={20} width={20} />,
  },
];

export default HostFeatures;
