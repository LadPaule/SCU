import Image from "next/image";
function ChildInfo({ waitingLists }) {
  return (
    <div
      className="flex-col m-5 bg-white z-30 p-10
    transition duration-500 ease-in-out transform hover:-translate-y-1"
    >
      {waitingLists.map((child) => (
        <div
          key={child.id}
          className="w-400 h-400 flex items-center justify-center"
        >
          {child.photograph.length > 0 && (
            <Image
              className="cursor-pointer rounded-lg h-100 w-100 flex items-center justify-center"
              src={child.photograph[0].url}
              width={200}
              height={200}
              objectFit="contain"
              alt={child.name}
              loading="lazy"
            />
          )}

          <h1 className="text-2xl font-black text-blue-600">{child.name}</h1>
          <div className="text-green-600">{child.childStory.text}</div>
        </div>
      ))}
    </div>
  );
}

export default ChildInfo;
