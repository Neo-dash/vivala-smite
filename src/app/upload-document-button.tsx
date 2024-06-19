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
import UploadDocumentForm from "./upload-document-form";
import { useState } from "react";
import { Pickaxe } from "lucide-react";




export default function CreateDocumentButton() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog onOpenChange={setIsOpen} open={isOpen}>
            <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                <Pickaxe color="#8756e1" className="w-6 h-6"/> Stack knowledge
            </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Upload a Document</DialogTitle>
                    <DialogDescription>
                        Upload a document for your clients to interact with ! 🚀
                    </DialogDescription>
                    <UploadDocumentForm onUpload={()=> setIsOpen(false)}/>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}
