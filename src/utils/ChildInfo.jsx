import Image from "next/image";
function ChildInfo({ waitingLists}) {
  return (
    <div className="flex flex-col m-5 bg-white z-30 p-10
    transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      {
        waitingLists.map((child) => (
          <div key={child.id}>
            { child.photograph.length > 0  && (
              <Image className="cursor-pointer rounded-lg h-100 w-100 flex items-center justify-center" src={child.photograph[0].url} 
              width={child.photograph[0].width} height={child.photograph[0].height} objectFit="contain" alt={child.name} loading="lazy"/>
              ) 
            }
            
            <h1 className="text-2xl font-black text-blue-600">{child.name}</h1>
           
          </div>
        ))
      }
    </div>
  );
}
        
      
  
export default ChildInfo
