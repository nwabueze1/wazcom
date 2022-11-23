import { useContext } from 'react';
import { RestaurantContext } from '../../contexts';

export const Notification = () => {
    const { notification } = useContext(RestaurantContext);
    return <p>Notification</p>
}