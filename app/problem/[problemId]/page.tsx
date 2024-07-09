"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Editor from "@monaco-editor/react";
import languages from "@/lib/languages";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ViewSubmissions from "@/components/problem/viewsubmissions/viewsubmissions";
import ProblemStatement from "@/components/problem/problemstatement/problemstatement";
import { ScrollArea } from "@/components/ui/scroll-area";
import axios from "axios";
import { useParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { encode } from "base-64";
import { useToast } from "@/components/ui/use-toast";
import ExecutedResult from "@/components/problem/results/results";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import base_url from "@/lib/url";
interface LanguageType {
  lang: string;
  path: string;
  value: string;
  language_id: number;
}
interface submitResultType {
  isAccepted: boolean;
  maxScore: number;
  userScore: number;
  results: Number[];
  status: string;
}
type LanguageKey = keyof typeof languages;
const Problem = () => {
  const [Lang, setLang] = useState<LanguageType>(languages["java"]);
  const [problemStatement, setProblemStatement] = useState<any>(null);
  const [consoleOpen, setconsoleOpen] = useState<boolean>(false);
  const [isCustom, setisCustom] = useState<boolean>(false);
  const [CustomInput, setCustomInput] = useState<string>("");
  const [runResult, setRunResult] = useState(null);
  const [submitResult, setSubmitResult] = useState<submitResultType | null>(
    null
  );
  const [isSubmit, setisSubmit] = useState<boolean>(false);

  const [isLoading, setLoading] = useState<boolean>(false);
  const editorRef = useRef<any>("");
  const params = useParams();
  const { toast } = useToast();
  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
  }
  useEffect(() => {
    console.log(params.problemId);
    const Config = {
      method: "POST",
      url: base_url + "/user/problem",
      data: {
        userId: localStorage.getItem("username"),
        contestId: "1001",
        problemId: params.problemId,
      },
    };
    axios.request(Config).then((res) => {
      setProblemStatement(res.data);
    });
  }, []);
  const HandleRunClick = async () => {
    setLoading(true);
    const config = {
      method: "POST",
      url: base_url + "/user/run",
      data: {
        userId: localStorage.getItem("username"),
        contestId: "1001",
        problemId: problemStatement.problemId,
        isCustom: isCustom,
        customInputs: CustomInput,
        sourceCode: encode(editorRef.current.getValue()),
        LanguageId: Lang.language_id,
        LanguageName: Lang.lang,
      },
    };
    axios.request(config).then((res) => {
      setRunResult(res.data);
      setconsoleOpen(true);
      setLoading(false);
      setisSubmit(false);
    });
  };
  const HandleSubmitClick = async () => {
    setLoading(true);
    const config = {
      method: "POST",
      url: base_url + "/user/submit",
      data: {
        userId: localStorage.getItem("username"),
        contestId: "1001",
        problemId: params.problemId,
        sourceCode: encode(editorRef.current.getValue()),
        LanguageId: Lang.language_id,
        LanguageName: Lang.lang,
      },
    };
    const res = await axios.request(config);
    setSubmitResult(res.data);
    setconsoleOpen(true);
    setLoading(false);
    setisSubmit(true);
    if (res.data.isAccepted) {
      toast({
        description: "Accepted !",
        variant: "success",
      });
    }
  };
  useEffect(() => {
    console.log("REun rESULT FROM MAIN PAGE");
  }, [runResult]);
  return (
    <div className="w-full h-[calc(100vh-64px)]">
      <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
        <ResizablePanel minSize={30} maxSize={70}>
          <ScrollArea className="h-full">
            <Tabs defaultValue="statement" className="">
              <div className="flex justify-between items-center">
                <TabsList className="w-3/4 grid grid-cols-2">
                  <TabsTrigger value="statement">Problem Statement</TabsTrigger>
                  <TabsTrigger value="submissions">Submissions</TabsTrigger>
                </TabsList>
                <Link
                  href="/contest/1001"
                  className="flex gap-2 items-center font-semibold mr-6"
                >
                  <ChevronLeftIcon />
                  Back to contest
                </Link>
              </div>
              <TabsContent value="statement">
                {problemStatement && (
                  <ProblemStatement statement={problemStatement} />
                )}
              </TabsContent>
              <TabsContent value="submissions">
                <ViewSubmissions />
              </TabsContent>
              <TabsContent value="notes">
                <Card className="border-none outline-none shadow-none">
                  <CardHeader>
                    <CardTitle className="text-center">
                      Add points to remember
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Point 1</AccordionTrigger>
                        <AccordionContent>
                          Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Point 2</AccordionTrigger>
                        <AccordionContent>
                          Yes. It comes with default styles that matches the
                          other components&apos; aesthetic.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Point 3</AccordionTrigger>
                        <AccordionContent>
                          Yes. It&apos;s animated by default, but you can
                          disable it if you prefer.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <Textarea rows={10} />
                    <Button variant="secondary" className="my-3">
                      Add point
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle
          withHandle
          style={{
            width: "10px",
          }}
        />
        <ResizablePanel>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={70}>
              <div className="flex items-center justify-end py-2 px-5 gap-3">
                <CardDescription>Language : </CardDescription>
                <Select
                  defaultValue="java"
                  onValueChange={(value: LanguageKey) => {
                    setLang(languages[value]);
                  }}
                >
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Java" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="js">Javascript</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="java">Java</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Editor
                defaultLanguage={Lang.lang}
                defaultValue={Lang.value}
                path={Lang.path}
                onMount={handleEditorDidMount}
                options={{
                  minimap: { enabled: false },
                }}
              />
            </ResizablePanel>
            <ResizableHandle
              withHandle
              style={{
                height: "10px",
              }}
            />
            {consoleOpen && (
              <ResizablePanel
                defaultSize={50}
                maxSize={90}
                onResize={(size) => {
                  if (size < 10) setconsoleOpen(false);
                }}
              >
                <ExecutedResult
                  submitResult={submitResult}
                  runResult={runResult}
                  loading={isLoading}
                  isSubmit={isSubmit}
                />
              </ResizablePanel>
            )}
            <div className="flex items-center justify-between py-2 px-5">
              <section>
                <Button
                  variant={"secondary"}
                  onClick={() => {
                    setconsoleOpen(!consoleOpen);
                  }}
                  className="flex gap-2 items-center"
                >
                  Console
                  {!consoleOpen ? (
                    <ChevronUpIcon className="mt-1" />
                  ) : (
                    <ChevronDownIcon />
                  )}
                </Button>
              </section>
              <section className="flex gap-2">
                <Button
                  variant="secondary"
                  onClick={HandleRunClick}
                  disabled={isLoading}
                >
                  Run
                </Button>
                <Button
                  variant="secondary"
                  onClick={HandleSubmitClick}
                  disabled={isLoading}
                >
                  Submit
                </Button>
              </section>
            </div>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Problem;
