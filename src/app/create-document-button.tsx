'use client'

import { Button } from "@/components/ui/button";
import { createDocument } from "../../convex/documents";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"




export default function CreateDocumentButton() {

    const createDocument = useMutation(api.documents.createDocument);

    return (
        <Dialog>
            <DialogTrigger asChild><Button onClick={() => {
                createDocument({ title: 'hello world' })
            }}
            >
                Upload Document

            </Button></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Upload a Document</DialogTitle>
                    <DialogDescription>
                        Upload a document for your clients to interact with ! 🚀
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}
