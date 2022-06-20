import './style.css';
//usando props
/*
export function Card(props){
   return(
      <div className='card'>
     <strong>{props.name}</strong>
      <small>{props.time}</small>
      </div>

   ) 
}*/
//desestruturando a props
export function Card({name, time}){
    return(
       <div className='card'>
      <strong>{name}</strong>
       <small>{time}</small>
       </div>
 
    ) 
 }