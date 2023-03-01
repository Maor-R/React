import { Card } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import {useState} from 'react'
import { products } from "../data";

const Product = () => {
  const { productId } = useParams();
  const pId = Number(productId);
  const productFilter = products.filter(product=> product.id === pId)
  const [product, setProduct] = useState(productFilter[0]);

  const navigate = useNavigate();
  const returnBack = ()=>{
    navigate('/product');
  }
  return (
    <Card className='my-3 p-3 rounded card-main card-main-sm card-main-md m_auto'>
      <Card.Body>
          <Card.Title as='h3' className='mt-1-sm pad-bottom'>
            <strong>
              {product.title}
            </strong>
          </Card.Title>
          <Card.Text as='h4' className='mb-3 pad-bottom '>
          {product.size} 
        </Card.Text>
        <Card.Img src={product.imageUrl} variant='top' alt={product.title} style={{ maxHeight: '10rem', maxWidth: '10rem' }} className="pad-bottom m_auto" />
        <Card.Text as='h4' className='mb-3 pad-bottom'>
          {product.price} ${' '}
        </Card.Text>

      </Card.Body>
      <button className='m_auto'  onClick={returnBack}>Back</button>

    </Card>
  );
};

export default Product;
