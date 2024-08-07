"use client"

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import ChatPanel from "./chat-panel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function DocumentPage({
    params,
}: {
    params: {
        documentId: Id<"documents">;
    };
}) {
    // Use the corrected getDocument query with the right parameter
    const document = useQuery(api.documents.getDocument, { documentId: params.documentId });

    if (!document) {
        return <div>
            You Don&apos;t Have Access to View This Document
        </div>
    }
    // Access properties from the document ? exit property now
    return (
        <main className="p-24 space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold">{document.title}</h1>
            </div>
            <div className="flex gap-12">

                <Tabs defaultValue="document" className="w-full">
                    <TabsList className="mb-4">
                        <TabsTrigger value="document">Document</TabsTrigger>
                        <TabsTrigger value="chat">Chat</TabsTrigger>
                    </TabsList>
                    <TabsContent value="document">

                        <div className="bg-gray-900 p-4 rounded-xl flex-1 h-[600px]">
                            {document.documentUrl && <iframe
                                className="w-full h-full"
                                src={document.documentUrl} />}
                        </div>

                    </TabsContent>
                    <TabsContent value="chat">

                        <ChatPanel documentId={document._id} />

                    </TabsContent>
                </Tabs>


            </div>
        </main>
    );
}
