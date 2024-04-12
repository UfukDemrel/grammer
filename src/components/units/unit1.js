import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTransition } from 'react-transition-state';

const Unit1 = () => {
  const [units, setUnits] = useState([]);
  const [blocks, setBlocks] = useState(false);
  const [selectedUnit] = useState(null);
  const [state, toggle] = useTransition({ timeout: 500, preEnter: true });

  const handleBlocks = () => {
    setBlocks(prevBlocks => !prevBlocks);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/ufukdemrel/grammerdata/main/data.json');
        const data = await response.json();
        setUnits(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {!selectedUnit && units.map(unit => (
        <div onClick={() => toggle()} className='mb-3' key={unit.id}>
          <div className='flex justify-between items-center mt-3' onClick={handleBlocks}>
            <div className='flex gap-2 items-center'>
              <img className='w-1/6' src={unit.icons.svg0} alt="Icon" />
              <div className='block'>
                <h2 className='font-semibold'>{unit.title}</h2>
                <p className='text-sm font-medium'>{unit.content}</p>
              </div>
            </div>
            <img src={unit.icons.svg2} alt='icon'/>          
          </div>
          
          {blocks && unit.lessons && unit.lessons.map(lesson => (
            <div key={lesson.id} className={`mt-1 example ${state.status}`}>
              <Link to={`/details/${lesson.id}`} className='flex items-center gap-2 hover:bg-gray-200 rounded-md p-1'>
                <img className='w-1/6' src={lesson.icons} alt='icons'/>
                <div className='block'>
                  <div className='text-sm font-medium spa text-slate-700'>{lesson.title}</div>
                  <p className='text-sm font-semibold'>{lesson.content}</p>
                </div>
              </Link>
            </div>
          ))}
          <hr className='mt-1'/>
        </div>
      ))}
    </div>
  );
};

export default Unit1;
