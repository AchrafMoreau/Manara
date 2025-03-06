import Image from "next/image";
import { WobbleCard } from "../ui/wobbel-card";

const GridThree = () => {
    return(
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-slate-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Préserver l’Eau
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Promouvoir une gestion responsable et durable des ressources en eau.
          </p>
        </div>
          <Image
            width={400}
            height={500}
            src="/preserve.jpg"
            alt="Water Consulting"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10  object-cover  rounded-2xl"
          />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-earth">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Innover & Optimiser
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Développer des solutions technologiques pour une meilleure efficacité hydrique.
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 h-full bg-sky-900 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
          <Image
            fill
            src={`https://jg7oqc4zb0.ufs.sh/f/HvI8a9wNfAj6n1gLsmQHr1RE6bKcglh47LY0BAStjVduQGZy`}
            alt="Water Consulting"
            className="object-cover"
          />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-zinc-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm ">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white ">
            Sensibiliser <br /> 
            Et Former
          </h2>
          <p className="mt-4 md:w-[50%] text-left  text-base/6 text-neutral-200">
            Éduquer et accompagner les acteurs vers des pratiques durables.
          </p>
        </div>
        <Image
            width={500}
            height={300}
            src="/train.jpg"
            alt="Water Consulting"
            className="absolute -right-10 md:-right-[40%] lg:-right-[30%] -bottom-20 -z-50 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
    )
}

export default GridThree;