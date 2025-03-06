import Image from "next/image";
import { WobbleCard } from "../ui/wobbel-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faLocationCrosshairs, faLocationDot, faLocationPin, faLocationPinLock } from "@fortawesome/free-solid-svg-icons";



const GridOne = () => {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-slate-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            One Location
          </h2>
          <div className="flex gap-3 justify-center items-center text-neutral-200">
            <FontAwesomeIcon icon={faLocationDot} />
            <p className="mt-4 text-left text-base/6 ">
              Centre Affaires Nour 1, Bloc B, Imm. 5, Appt N°3 - Tamesna, Maroc
            </p>
          </div>
        </div>
          <Image
            width={500}
            height={300}
            src="/water_consulting.jpg"
            alt="Water Consulting"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-earth ">
        <h2 className="max-w-80  text-left  text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          One Team.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Our team consists of experienced professionals who bring innovative solutions to every water project.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-primary min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Directrice Fondatrice <br />
            Dr. ASMA BEN MOUSSA 
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
             fondatrice de Manara Water Consulting, est experte en gestion de l'eau. Elle développe des solutions durables pour préserver les ressources. Son leadership guide la mission environnementale de l’entreprise.
          </p>
        </div>
        <Image
            width={300}
            height={400}
            src="/directrice.jpg"
            objectFit="contain"
            alt="Water Consulting"
            className="absolute -right-10 -bottom-28 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
    )
}

export default GridOne;