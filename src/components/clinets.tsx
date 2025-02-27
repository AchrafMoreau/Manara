import Image from "next/image";
import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";


const Clinets = () => {
    const firstRow = [
        {id: 1, src: "/abhbc.png", alt: "abhbc"},
        {id: 2, src: "/anp.png", alt: "anp"},
        {id: 3, src: "/bh_guir.png", alt: "guir"},
        {id: 4, src: "/bh_oum_erbia.png", alt: "oum-erbia"},
        {id: 5, src: "/bhl.png", alt: "bhl"},
        {id: 6, src: "/marsa.png", alt: "marsa"},
        {id: 7, src: "/nador.png", alt: "nador"},
        {id: 8, src: "/onep.png", alt: "onep"},
    ]
    return(
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((elm) => (
                    <figure
                        className={cn(
                            "relative h-[150px] w-[150px] cursor-pointer overflow-hidden rounded-xl border p-4",
                            // light styles
                            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                            // dark styles
                            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                        )}
                >
                    <div className="w-[10px] h-[100px]">
                    <Image
                        key={elm.id}
                        src={elm.src}
                        alt={elm.alt}
                        fill
                    />
                    </div>
                </figure>
            ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
    )
}

export default Clinets;