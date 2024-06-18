import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button"
import { ReactNode } from "react";




export function LoadingButton({ isLoading, children, loadingText }:
    {
        isLoading: boolean;
        children: ReactNode;
        loadingText: String;
    }) {
    return (<Button
        className="flex gap-2 items-center"
        disabled={isLoading}
        type="submit"
    >
        {isLoading && <Loader2 className="animate-spin" />}
        {isLoading ? loadingText : children}

    </Button>
    );
}