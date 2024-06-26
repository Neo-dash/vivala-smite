"use client"

import { useAction, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";




//this is a comment just to test some things with github  vblablal
export default function ChatPanel({
    documentId,
}: {
    documentId: Id<"documents">;
}) {

    const askQuestion = useAction(api.documents.askQuestion);
    return (
        <div className="w-[300px] bg-gray-900 flex flex-col gap-2 p-1">
            <div className=" h-[350px] overflow-y-auto">

                <div className="p-4 bg-gray-800">Hello</div>
                <div className="p-4 bg-gray-800">World</div>
                <div className="p-4 bg-gray-800">Hello</div>
                <div className="p-4 bg-gray-800">World</div>


            </div>
            <div className="flex gap-1">
                <form onSubmit={async (event) => {
                    event.preventDefault();
                    const form = event.target as HTMLFormElement;
                    const formData = new FormData(form);
                    const text = formData.get("text") as string;

                    //Call convex
                    await askQuestion({ question: text, documentId}).then(console.log);

                }}>
                    < Input required name="text" />
                    <Button>Submit</Button>
                </form>
            </div>


        </div>




    );
}