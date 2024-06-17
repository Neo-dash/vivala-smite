'use client'

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useMutation, useQueries, useQuery } from "convex/react";
import { Content } from "next/font/google";
import { api } from "../../convex/_generated/api";
import { title } from "process";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { DocumentCard } from "./document-card";

export default function Home() {


  const documents = useQuery(api.documents.getDocuments);
  const createDocument = useMutation(api.documents.createDocument);


  return (
    <main className="p-24 space-y-8">
      <div className="flex justify-between items-center">

      <h1 className="text-4xl font-bold">My Knowledge</h1>
      <Button onClick={() => {
        createDocument({ title: 'hello world' })


      }}
      >
        Upload Document

      </Button>
      </div>



      <div className="grid grid-cols-4 gap-8">
      {documents?.map((doc) => <DocumentCard

        document={doc} />)}
      </div>
    </main>
  );
}
