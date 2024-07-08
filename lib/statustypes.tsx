import {
  CheckIcon,
  Cross1Icon,
  ExclamationTriangleIcon,
  LapTimerIcon,
} from "@radix-ui/react-icons";
const statusTypes: Record<string, JSX.Element> = {
  3: <CheckIcon color="#37ff00" height={30} width={30} />,
  4: <Cross1Icon color="#ff0000" height={20} width={20} />,
  5: <LapTimerIcon color="#ff0000" height={20} width={20} />,
  6: <ExclamationTriangleIcon color="#ff0000" height={20} width={20} />,
  7: <ExclamationTriangleIcon color="#ff0000" height={20} width={20} />,
  8: <ExclamationTriangleIcon color="#ff0000" height={20} width={20} />,
  9: <ExclamationTriangleIcon color="#ff0000" height={20} width={20} />,
  10: <ExclamationTriangleIcon color="#ff0000" height={20} width={20} />,
  11: <ExclamationTriangleIcon color="#ff0000" height={20} width={20} />,
};

export default statusTypes;
