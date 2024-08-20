import { IconBrandAmazon } from "@tabler/icons-react";
import Link from "next/link";


export default function Logo(){


    return(
        <Link href="/">
            <div className="flex flex-col items-center mt-2">
                <div className="text-xl text-white leading-4">A S</div>
                <IconBrandAmazon 
                    size={40}
                    stroke={1}
                    className="-mt-2 text-white"
                />
            </div>
        </Link>
    )
}