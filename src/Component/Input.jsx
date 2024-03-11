import { useState,useEffect } from 'react';
import Card from './Card';
function Input() {
  const [name, setName] = useState('');
  const [hour, setHour] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('data'));
    if (savedData) {
      setData(savedData);
    }
  }, []);

  const handleChange = (e) => {
    setName(e.target.value);
    
  };

  const handleChange1 = (e) => {
    setHour(e.target.value);
  };
  
  const btn = () => {
    if (name !== '' && hour > 0) {
      setData([...data, { "Name": name, "Time": hour }]);
      setName(''); 
      
    }
  };


  
  const handleDelete = (e) => {
    const newValue=data.filter((num,index)=>{
          return e!=index;
       })
       setData(newValue)
       console.log(newValue);
       
  };
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  return (
    <div className='box'>
    
      <p className='text'>Geekster Education Planner</p>
      <div className='box2'>
      <input className='inp1' type='text' onChange={handleChange} value={name} placeholder='Subject'/>
      <input className='inp2' type='number' onChange={handleChange1} value={hour} placeholder='Hour'/>
      <button className='click-btn' onClick={btn}>Add</button>
      </div>

      
      {
        data.map((item, index) => (
          <Card key={index} Name={item.Name} Time={item.Time} Id={index}  handleDelete={handleDelete}/>
        ))

      }
     
      
    </div>
    
  );
}

export default Input;
