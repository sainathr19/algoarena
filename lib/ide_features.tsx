import {
  CodeIcon,
  FileInputIcon,
  HighlighterIcon,
  TerminalIcon,
  TrophyIcon,
  UploadIcon,
} from "lucide-react";

const IdeFeatures = [
  {
    name: "10+ Languages",
    icon: <CodeIcon height={20} width={20} />,
  },
  {
    name: "Code Highlighting",
    icon: <HighlighterIcon height={20} width={20} />,
  },
  {
    name: "Custom Inputs",
    icon: <FileInputIcon height={20} width={20} />,
  },
  {
    name: "Sample Testcases",
    icon: <TerminalIcon height={20} width={20} />,
  },
  {
    name: "Code Submission",
    icon: <UploadIcon height={20} width={20} />,
  },

  {
    name: "Live Leaderboard",
    icon: <TrophyIcon height={20} width={20} />,
  },
];

export default IdeFeatures;
