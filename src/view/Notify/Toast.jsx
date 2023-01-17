import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Toast.css';

const TOAST_PROPERTIES = [
    {
        id: Math.floor((Math.random() * 101) + 1),
        title: 'Success',
        description: 'This is a success toast component',
        backgroundColor: '#5cb85c',
        icon: 'checkIcon'
    },
];

export const TestNotify = () => {
    const [list, setList] = useState([]);

    const showToast = type => {
        const toastProperties = TOAST_PROPERTIES.find((toast) => toast.title.toLowerCase() === type);
        setList([...list, toastProperties]);
    }


    return (
        <>
            <button onClick={() => showToast('success')}>CLICK</button>
            <Toast
                toastList={list}
                position={'top-right'}
                autoDelete={true}
                autoDeleteTime={3000}
            />
        </>
    );
}

const Toast = props => {
    const { toastList, position, autoDelete, autoDeleteTime } = props;
    const [list, setList] = useState(toastList);

    useEffect(() => {
        setList([...toastList]);
    }, [toastList]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoDelete && toastList.length && list.length) {
                deleteToast(toastList[0].id);
            }
        }, autoDeleteTime);

        return () => {
            clearInterval(interval);
        }

    }, [toastList, autoDelete, autoDeleteTime, list]);

    const deleteToast = id => {
        const listItemIndex = list.findIndex(e => e.id === id);
        const toastListItem = toastList.findIndex(e => e.id === id);
        list.splice(listItemIndex, 1);
        toastList.splice(toastListItem, 1);
        setList([...list]);
    }

    return (
        <>
            <div className={`notification-container ${position}`}>
                {
                    list.map((toast, i) =>
                        <div
                            key={i}
                            className={`notification toast ${position}`}
                            style={{ backgroundColor: toast.backgroundColor }}
                        >
                            <button onClick={() => deleteToast(toast.id)}>
                                X
                            </button>
                            <div className="notification-image">
                                <img src={toast.icon} alt="" />
                            </div>
                            <div>
                                <p className="notification-title">{toast.title}</p>
                                <p className="notification-message">
                                    {toast.description}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

Toast.propTypes = {
    toastList: PropTypes.array.isRequired,
    position: PropTypes.string.isRequired,
    autoDelete: PropTypes.bool,
    autoDeleteTime: PropTypes.number
}

export default Toast;