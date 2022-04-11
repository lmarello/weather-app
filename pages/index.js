import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full grid place-content-center my-10 ">
        <h1 className="text-4xl text-gray-700">Weather App</h1>
      </div>
      <div className="mx-auto grid grid-cols-[30%_70%] max-w-4xl h-[500px] rounded-[40px] overflow-hidden shadow-lg text-gray-600">
        <div className="bg-white p-10">
          <div>Barra de busqueda</div>
          <div className="grid content-center mt-10">
            <h1 className="text-md font-semibold">Buenos Aires, Argentina</h1>
            <h2 className="text-sm mb-10">
              <span className="font-semibold">Monday</span>
              <span className="text-gray-400">, 16:00</span>
            </h2>
            <Image
              width={120}
              height={120}
              src="/images/forecast/showers.svg"
              alt="clima"
            />
            <h1 className="mt-10 text-5xl text-center">12°C</h1>
            <h1 className="mt-1 text-lg text-center">Mostly Cloud</h1>
          </div>
        </div>
        <div className="bg-gray-100 p-10">
          <div className="flex gap-4">
            <div className="bg-white w-[100px] p-3 rounded-lg grid justify-items-center">
              <h1 className="font-semibold mb-2">Sun</h1>
              <Image
                width={40}
                height={40}
                src="/images/forecast/sunny.svg"
                alt="clima"
              />

              <p className="text-xs mt-2">
                <span className="font-semibold ">MAX. 21°C</span>
              </p>
              <p className="text-xs">
                <span className="text-gray-400">MIN. 12°C</span>
              </p>
            </div>
            <div className="bg-white w-[100px] p-3 rounded-lg grid justify-items-center">
              <h1 className="font-semibold mb-2">Sun</h1>
              <Image
                width={40}
                height={40}
                src="/images/forecast/sunny.svg"
                alt="clima"
              />

              <p className="text-xs mt-2">
                <span className="font-semibold ">MAX. 21°C</span>
              </p>
              <p className="text-xs">
                <span className="text-gray-400">MIN. 12°C</span>
              </p>
            </div>
            <div className="bg-white w-[100px] p-3 rounded-lg grid justify-items-center">
              <h1 className="font-semibold mb-2">Sun</h1>
              <Image
                width={40}
                height={40}
                src="/images/forecast/sunny.svg"
                alt="clima"
              />

              <p className="text-xs mt-2">
                <span className="font-semibold ">MAX. 21°C</span>
              </p>
              <p className="text-xs">
                <span className="text-gray-400">MIN. 12°C</span>
              </p>
            </div>
            <div className="bg-white w-[100px] p-3 rounded-lg grid justify-items-center">
              <h1 className="font-semibold mb-2">Sun</h1>
              <Image
                width={40}
                height={40}
                src="/images/forecast/sunny.svg"
                alt="clima"
              />

              <p className="text-xs mt-2">
                <span className="font-semibold ">MAX. 21°C</span>
              </p>
              <p className="text-xs">
                <span className="text-gray-400">MIN. 12°C</span>
              </p>
            </div>
            <div className="bg-white w-[100px] p-3 rounded-lg grid justify-items-center">
              <h1 className="font-semibold mb-2">Sun</h1>
              <Image
                width={40}
                height={40}
                src="/images/forecast/sunny.svg"
                alt="clima"
              />

              <p className="text-xs mt-2">
                <span className="font-semibold ">MAX. 21°C</span>
              </p>
              <p className="text-xs">
                <span className="text-gray-400">MIN. 12°C</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
