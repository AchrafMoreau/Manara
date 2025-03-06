import Image from "next/image";
import { WobbleCard } from "../ui/wobbel-card";
import { NumberTicker } from "../magicui/number-ticker";

const GridTwo = () => {
    return(
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 max-w-7xl mx-auto w-full">

      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-6xl font-semibold tracking-[-0.015em] text-white">
          +
          <NumberTicker
            value={30}
            className="whitespace-pre-wrap  font-medium tracking-tighter text-white"
          />
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Institutions publiques accompagnées pour une gestion durable de l’eau.
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-slate-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-6xl font-semibold tracking-[-0.015em] text-white">
          +
          <NumberTicker
            value={22}
            className="whitespace-pre-wrap  font-medium tracking-tighter text-white"
          />
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Villes et collectivités équipées de solutions intelligentes de gestion de l’eau.
          </p>
        </div>
          <Image
            width={500}
            height={400}
            src="/ville.jpg"
            alt="Water Consulting"
            className="absolute -right-4 lg:-right-[40%]  -bottom-10 object-contain rounded-2xl"
          />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-zinc-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-6xl font-semibold tracking-[-0.015em] text-white">
          +
          <NumberTicker
            value={15}
            className="whitespace-pre-wrap  font-medium tracking-tighter text-white"
          />
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Entreprises et industries optimisant leur consommation hydrique.
          </p>
        </div>
        <Image
            width={500}
            height={300}
            src="/water_company.jpg"
            alt="Water Consulting"
            className="absolute -right-10 md:-right-[40%] lg:-right-[40%] grayscale filter -bottom-20 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 h-full bg-sky-900 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
          <Image
            fill
            src="/clients.jpg"
            alt="Water Consulting"
            className="object-cover"
          />
      </WobbleCard>
    </div>
    )
}

/**
 * bg-blue-900
 * bg-zinc-800
 * bg-slate-900
 */
export default GridTwo;