'use client'

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useMutation, useQueries, useQuery } from "convex/react";
import { Content } from "next/font/google";
import { api } from "../../convex/_generated/api";
import { title } from "process";
import { Button } from "@/components/ui/button";

export default function Home() {


  const documents = useQuery(api.documents.getDocuments);
  const createDocument = useMutation(api.documents.createDocument);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />

        <Button onClick={() => {
          createDocument({title: 'hello world'})


        }}> Click Me</Button>

        {documents?.map((doc) => (

          <div key={doc._id}>{doc.title}</div>
        ))}



      </Authenticated>
    </main>
  );
}
