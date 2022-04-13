import Card from './Card.js';

function Detail(props){
    return (
      <div className="container">
        <div className="row">
          <h2>상품목록</h2>
          {
            props.shoes.map((item,idx,arr)=>{                  
              return <Card 신발={item} index={idx} key={item.id}/>                     
            })                   
          }              
        </div>        
      </div>
    );    
}
export default Detail;