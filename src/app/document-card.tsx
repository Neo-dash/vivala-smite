import { Doc } from "../../convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Link from 'next/link';  // Correct import for Next.js Link
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
//comment
//hey
export function DocumentCard({ document }: { document: Doc<"documents"> }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{document.title}</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                <p>Click to See Description</p>
            </CardContent>
            <CardFooter>
                <Link href={`/documents/${document._id}`} passHref>
                    <Button  variant="secondary" className="flex items-center gap-2">
                        <Eye className="w-4 h-4" /> View
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
