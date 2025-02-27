import Image from "next/image";
import { WobbleCard } from "../ui/wobbel-card";

const GridTwo = () => {
    return(
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 h-full bg-zinc-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <Image
            fill
            src="/water_consulting.jpg"
            alt="Water Consulting"
            className="object-cover"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-2 min-h-[300px]">
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
          <Image
            width={500}
            height={300}
            src="/water_consulting.jpg"
            alt="Water Consulting"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
            width={500}
            height={300}
            src="/water_consulting.jpg"
            alt="Water Consulting"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 h-full bg-slate-900 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>
    </div>
    )
}

export default GridTwo;