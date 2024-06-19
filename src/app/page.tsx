'use client'

import { useQuery } from 'convex/react';
import dynamic from 'next/dynamic';
import { api } from '../../convex/_generated/api';
import { DocumentCard } from './document-card';

const CreateDocumentButton = dynamic(
  () => import('./upload-document-button'),
  { ssr: false }  // This prevents the component from rendering on the server side
);

export default function Home() {
  const documents = useQuery(api.documents.getDocuments);

  return (
    <main className="p-24 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">My Documents</h1>
        <CreateDocumentButton />
      </div>
      <div className="grid grid-cols-4 gap-8">
        {documents?.map((doc) => <DocumentCard key={doc._id} document={doc} />)}
      </div>
    </main>
  )
}