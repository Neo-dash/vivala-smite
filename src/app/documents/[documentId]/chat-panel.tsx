"use client";

import { useAction, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserSquare } from "lucide-react";

// This is a comment just to test some things with GitHub
export default function ChatPanel({
    documentId,
}: {
    documentId: Id<"documents">;
}) {
    const chats = useQuery(api.chats.getChatsForDocument, { documentId });
    const askQuestion = useAction(api.documents.askQuestion);

    return (
        <div className="bg-gray-900 flex flex-col gap-2 p-1">
            <div className="h-[350px] overflow-y-auto space-y-2">
                <div className="bg-slate-950 rounded p-2">
                    AI: Ask any question using AI about this document!
                </div>
                {chats?.map((chat) => (
                    <div
                        key={chat._id}
                        className={cn(
                            {
                                "bg-slate-800": chat.isHuman,
                                "text-right": chat.isHuman,
                            },
                            "rounded p-2"
                        )}
                    >
                        {chat.isHuman ? "YOU" : "AI"}: {chat.text}
                    </div>
                ))}
            </div>
            <div className="flex gap-1">
                <form
                    className="flex-1 gap-2"
                    onSubmit={async (event) => {
                        event.preventDefault();
                        const form = event.target as HTMLFormElement;
                        const formData = new FormData(form);
                        const text = formData.get("text") as string;

                        // Call convex
                        await askQuestion({ question: text, documentId }).then(console.log);
                    }}
                >
                    <div className="flex gap-2">
                        <Input className="flex-1" required name="text" />
                        <Button>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
