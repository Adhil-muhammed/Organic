import React, { useEffect } from "react";
import { createContext, useState } from "react";
export const DataContext = createContext();
// row item
const imges = [
  {
    id: 0,
    imge:
      "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 1,
    imge:
      "https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    imge:
      "https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    imge:
      "https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    imge:
      "https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 5,
    imge:
      "https://images.pexels.com/photos/1367242/pexels-photo-1367242.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    imge:
      "https://images.pexels.com/photos/1367242/pexels-photo-1367242.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    imge:
      "https://images.pexels.com/photos/1367242/pexels-photo-1367242.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    imge:
      "https://images.pexels.com/photos/1367242/pexels-photo-1367242.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
// cateogary
const cateogary = [
  {
    ide: 0,
    ctImage:
      "https://images.unsplash.com/photo-1620826013236-f2b83cf73acf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVpdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
  },
  {
    ide: 1,
    ctImage:
      "https://images.unsplash.com/photo-1550429935-d9315beb4f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVpdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
  },
  {
    ide: 2,
    ctImage:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
  },
  {
    ide: 3,
    ctImage:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    ide: 4,
    ctImage:
      "https://images.unsplash.com/photo-1587411768515-eeac0647deed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHZlZ2V0YWJsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    ide: 5,
    ctImage:
      "https://images.unsplash.com/photo-1587049332298-1c42e83937a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHZlZ2V0YWJsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    ide: 6,
    ctImage:
      "https://media.istockphoto.com/photos/shot-of-a-elderly-man-holding-a-grocery-bag-in-the-kitchen-picture-id1352439467?b=1&k=20&m=1352439467&s=170667a&w=0&h=NmXfzKX-v_3l8SA7CCSGrfObdbX5KW-enbLqd2FPdZI=",
  },
  {
    ide: 7,
    ctImage:
      "https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    ide: 8,
    ctImage:
      "https://images.unsplash.com/photo-1522184216316-3c25379f9760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzMzYwMTk3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    ide: 9,
    ctImage:
      "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    ide: 10,
    ctImage:
      "https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    ide: 11,
    ctImage:
      "https://images.pexels.com/photos/952360/pexels-photo-952360.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    ide: 12,
    ctImage:
      "https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    ide: 13,
    ctImage:
      "https://images.pexels.com/photos/1192034/pexels-photo-1192034.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
function CreateContext({ children }) {
  const [passItem, setPassItem] = useState([]);
  const [passCategory, setPassCategory] = useState([]);
  var item = imges.map((obj) => {
    // console.log(obj.imge)
    return obj;
  });
  var ctItems = cateogary.map((ct) => {
    return ct;
  });
  useEffect(() => {
    setPassItem(item);
    setPassCategory(ctItems);
  }, []);

  return (
    <div>
      <DataContext.Provider
        value={{ passItem, passCategory, setPassItem, setPassCategory }}
      >
        {" "}
        {children}
      </DataContext.Provider>

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
