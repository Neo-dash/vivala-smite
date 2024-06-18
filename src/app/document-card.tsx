
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Doc } from "../../convex/_generated/dataModel"
import { Button } from "@/components/ui/button";
import { Gem, Pipette } from "lucide-react";


export function DocumentCard({ document }: { document: Doc<"documents"> }) {

    return (
        <Card>
            <CardHeader>
                <CardTitle>{document.title}</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
            <Button className="flex items-center gap-2">
                <Gem color="#8756e1" className="w-6 h-6"/> View
            </Button>
            </CardFooter>
        </Card>);
}
