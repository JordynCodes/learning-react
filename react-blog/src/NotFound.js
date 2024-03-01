import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404 - Page does not exist</h2>
            <Link to="/">Back to homepage...</Link>
        </div>
     );
}
 
export default NotFound;