import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo } =
    resData?.info;
  // let us understand the concept of destructuring that the above line is demonstrating : { cloudinaryImageId, name, cuisines, avgRatingString }: This part is using object destructuring syntax. It creates variables named cloudinaryImageId, name, cuisines, and avgRatingString and assigns them the corresponding values from the resData.info object. Each variable is assigned the value of the property with the same name from the resData.info object.

  // Please do not forget that everything you write as an attribute to the child jsx will be wrapped by react in an object form so props are nothing but an object with key and values and you know this concept of destructuring in js that helps in extracting the values of ararys and object properties in a more concise and convenient way.
  return (
    <div className="w-[250] bg-slate-300 p-4 m-3 h-[510] rounded-lg hover:bg-gray-400">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="py-2 text-lg font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRatingString}</h4>
    </div>
  );
};

export const withLocality = (ResCard) =>{
  // The below line indicates the return of an anonymous component  that returns a ResCard component with some label/modification.
  
  return (props) =>{
    // And as you know that a component again returns a piece of jsx  so below is that.
    return(
      <div>
         <label className ="bg-gray-900 text-white p-1  absolute rounded-lg">Panchkula</label>
         {/* Let us learn about absolute css property a little deeper - Refer to absolute.txt */}
         <ResCard {...props}/>
         {/* refer to spread.txt for more details */}
      </div>
     
    )
  }
  
}
export default ResCard;
