import React, { useState } from "react";
import { Link } from "react-router-dom";

function Unit1() {
    const [unitOne, setUnitOne] = useState(false);

    const handleToggle = () => {
      setUnitOne((prevState) => !prevState);
    };

    const data = [
      { 
          "id": "1",
          "title": "Unit 1",
          "svg0": "https://img.icons8.com/sf-black-filled/40/228BE6/rating-circled.png",
          "svg1": "https://img.icons8.com/sf-black-filled/40/40C057/rating-circled.png",
          "svg2": "https://img.icons8.com/color/40/so-so.png",
          "content": "Basic greetings & What's your..?",
          "description": "Build upon your basic greetings knowledge and dive into more advanced phrases. Practice asking about well-being and expressing feelings.",
          "info": [
              {
                  "id": "1",
                  "title": "Lesson 1",
                  "content": "Warmup: 2 truths and a lie."
              }
          ]
      }
  ];
  
  return (
    <>
    {data && data.map(item => (    
      <div id={item.id} key={item.id} onClick={handleToggle} className="p-2 gap-2 mt-3 cursor-pointer rounded-lg">
        <div className="flex justify-between items-center gap-2">
          <div>
            <img src={item.svg0} alt="alt" />
          </div>
          <div className="block">
            <div className="font-bold text-xl">{item.title}</div>
            <div className="font-medium">{item.content}</div>
          </div>
          <div className="flex items-center justify-end">
            <img src={item.svg2} alt="alt" />
          </div>
        </div>
        {unitOne && (
        <div className="p-2">
          <div className="text-sm text-slate-700 w-11/12">
            {item.description}
          </div>
          <Link to={`/details/${item.info[0].id}`}>
            <div id={item.info[0].id} className='mb-3 mt-3 flex justify-start items-center gap-2 shadow rounded-lg hover:bg-gray-300 p-2'>
              <img width="50" height="50" src="https://img.icons8.com/bubbles/50/people-working-together.png" alt="people-working-together"/>
              <div className='block'>
                <div className='text-xs'>{item.info[0].title}</div>
                <div className='font-semibold text-sm'>{item.info[0].content}</div>
              </div>
            </div>
          </Link>
        </div>
        )}
      </div>
      ))}
      <hr />
    </>
    
  );
}

export default Unit1;
