"use client";

import React, { useRef, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Editor from "@monaco-editor/react";
import languages from "@/lib/languages";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const Problem = () => {
  const [Lang, setLang] = useState(languages["java"]);
  const editorRef = useRef(null);
  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
  }

  return (
    <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
      <ResizablePanel minSize={30} maxSize={70}>
        <Tabs defaultValue="statement" className="w-full">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="statement" className="">
              Problem Statement
            </TabsTrigger>
            <TabsTrigger value="submissions">Submissions</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
          </TabsList>
          <TabsContent value="statement">
            <ProblemStatement />
          </TabsContent>
          <TabsContent value="submissions" className="overflow-scroll">
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
                      Yes. It comes with default styles that matches the other
                      components&apos; aesthetic.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Point 3</AccordionTrigger>
                    <AccordionContent>
                      Yes. It&apos;s animated by default, but you can disable it
                      if you prefer.
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
      </ResizablePanel>
      <ResizableHandle
        withHandle
        style={{
          width: "10px",
        }}
      />
      <ResizablePanel>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={75}>
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
          {/* <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Console</span>
            </div>
          </ResizablePanel> */}
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Problem;
