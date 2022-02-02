import Image from "next/image";
import { vols } from "./utils/Vols";

export default function Volunteer({ volunteers }) {
  return (
    <div className="">
      {vols.map((vol) => (
        <div
          key={vol.url}
          role="listitem"
          className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
        >
          <div className="rounded overflow-hidden shadow-md bg-white">
            <div className="absolute -mt-20 w-full flex justify-center">
              <div className="w-48 h-48">
                {vol.photo && (
                  <Image
                    src={vol.photo}
                    alt={vol.name}
                    width={100}
                    height={100}
                    className="rounded-full object-cover h-full w-full shadow-md"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
