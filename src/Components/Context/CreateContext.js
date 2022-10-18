import React ,{memo, useEffect}from "react";
import { createContext, useState} from "react";
export const  DataContext = createContext();

const imges = [
    {  
      id:0,
      imge:
        "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id:1,
      imge:
        "https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id:2,
      imge:
        "https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id:3,
      imge:
        "https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id:4,
      imge:
        "https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id:5,
      imge:
        "https://images.pexels.com/photos/1367242/pexels-photo-1367242.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id:6,
      imge:
        "https://images.pexels.com/photos/1367242/pexels-photo-1367242.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id:7,
      imge:
        "https://images.pexels.com/photos/1367242/pexels-photo-1367242.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id:8,
      imge:
        "https://images.pexels.com/photos/1367242/pexels-photo-1367242.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
function CreateContext({ children }) {
  const [passItem, setPassItem] = useState([])
  var item= imges.map((obj)=>{

    // console.log(obj.imge)
    return obj.imge
  })


  useEffect(() => {
    setPassItem(item)
  

  
}, [])

  return (
      <div>
    
      <DataContext.Provider value={passItem}> {children}</DataContext.Provider>
      
      <h3>This from Context</h3>
      
     
    </div>
  );
}

export default CreateContext;

        // const items=imgess.map((obj)=>{
        //     return obj;
        // })
        // useEffect(() => {
        //   setPassItem(items)
        
          
        // }, [])
        // useEffect,