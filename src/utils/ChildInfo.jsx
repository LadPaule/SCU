import Image from "next/image";

function ChildInfo({ child}) {
  return (
    <div
      className="relative flex-col m-5 bg-white z-30 p-10
    transition duration-500 ease-in-out transform hover:-translate-y-1"
    >
      {child.photograph.length > 0 && (
      <Image src={child.photograph[0].url} className="rounded-md items-center justify-center cursor-pointer" 
        alt={child.name} 
        width={200}
        height={200}
        objectFit="contain"
        loading="lazy"
      />)
      }
      <h1 className="cursor-pointer ">{child.name}</h1>
      <p className="cursor-pointer">Child date of Birth</p>
      <p>{child.childStory.text}</p>

      <button className="button">more info</button>

    </div>
  );
}

export default ChildInfo;
