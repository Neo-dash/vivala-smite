
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { createDocument } from "../../convex/documents"
import { HeaderActions } from './header-actions'

export function Header() {

    return <div className="bg-slate-900 py-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-4">
                <Image src="/logo.png" width={100} height={100} alt='An Image of Moria Gate' />
                
            </div>

            <div className="flex gap-5 items-center">
                <ModeToggle />

                <HeaderActions />
            </div>
        </div>

    </div>
}