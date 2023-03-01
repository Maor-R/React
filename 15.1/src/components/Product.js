import { Card } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import {useState} from 'react'
import { products } from "../data";

const Product = () => {
  const { productId } = useParams();
  const pId = Number(productId);
  const productFilter = products.filter(product=> product.id === pId)
  // alert(p[0].id)
  const [product, setProduct] = useState(productFilter[0]);
  return (
    <Card className='my-3 p-3 rounded card-main card-main-sm card-main-md m_auto'>
      <Card.Body>
          <Card.Title as='div' className='mt-1-sm'>
            <strong>
              {product.title}
            </strong>
          </Card.Title>
          <Card.Text as='h5' className='mb-3 '>
          {product.size} 
        </Card.Text>
        <Card.Img src={product.imageUrl} variant='top' alt={product.title} style={{ maxHeight: '10rem', maxWidth: '10rem' }} className="m_auto" />
        <Card.Text as='h5' className='mb-3'>
          {product.price} ${' '}
        </Card.Text>

      </Card.Body>
    </Card>
  );
};

export default Product;
