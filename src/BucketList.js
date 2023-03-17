import './BucketList.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ReactComponent as Add} from './add-file-svgrepo-com.svg';
import {ReactComponent as Back} from './back-svgrepo-com.svg';

function BucketList( {title} ) {
    const databaseURL = "https://hci-p4-e6f8b-default-rtdb.firebaseio.com/";

    const [displayModal, setDisplayModal] = useState(false);
    const [databaseUpdated, setDatabaseUpdated] = useState(false);
    const [postResult, setPostResult] = useState(null);
    const [newItem, setNewItem] = useState(null);
    const [retrievedItems, setRetrievedItems] = useState(null);
    const [dataRetrieveResult, setDataRetrieveResult] = useState(null);

    // load data on page
    useEffect(() => {
        getData();
    });

    // navigate back to home page
    const navigate = useNavigate();
    const redirectToHome = () => {
        navigate('/cs378-p4/Home');
    }

    // save new bucket list item
    const sendData = () => {
        setDisplayModal(!displayModal);
        setDatabaseUpdated(true);
        setNewItem("");

        const dict = {
            date: new Date(),
            text: newItem
        }

        return fetch(`${databaseURL}/${title}/.json`, {
            method: "POST",
            body: JSON.stringify(dict)
        }).then((response) => {
            if (response.status !== 200) {
                setPostResult("Oops! Something unexpected happened: " + response.statusText);
            } else {
                setPostResult(null);
                return;
            }
        })
    }

    // get bucket list
    const getData = () => {
        fetch(`${databaseURL}/${title}/.json`)
        .then((response) => {
            if (response.status !== 200) {
                setDataRetrieveResult("Cannot fetch your bucket list items at this time: " + response.statusText);
            } else {
                setDataRetrieveResult(null);
                return response.json();
            }
        })
        .then((response) => {
            if (response) {
                const keys = Object.keys(response);
                const dataPoints = keys
                    .map((k) => response[k]);
                setRetrievedItems(dataPoints);
            }
        })

    }

    // save inputted bucket item list
    const handleInputChange = (e) => {
        setNewItem(e.target.value);
        console.log("Input change value: " + e.target.value);
    }

    return (
        <div>
            {displayModal ? 
                <div className="pop-up-container">
                    <div className="pop-up">
                        <div className="container-2">
                            <input className="pop-up-input" type="text" placeholder="Add new bucket list item" onChange={handleInputChange}/>
                        </div>
                        <div className="container-2">
                            <button className="add-item-button" onClick={() => sendData()}>
                                Add
                            </button>
                            <button className="cancel-item-button" onClick={() => setDisplayModal(!displayModal)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            : ''}

            <div>
                <button className="back-button" onClick={redirectToHome}>
                    <Back className="back-icon" />
                </button>
            </div>
            <h1>{title}</h1>
            <h3>Bucket List</h3>
            <div className="container">
                {dataRetrieveResult === null && retrievedItems !== null
                ? retrievedItems.map((item, index) => {
                    return (
                        <div key={index} className="list-container">
                            <div className="bucket-item">
                                <p className="bucket-list-title">{item["text"]}</p>
                            </div>
                        </div>
                    )
                }) :
                    <div className="list-container">
                        <div className="bucket-item empty-item">
                            <p className="empty-header">Nothing here yet!</p>
                        </div>
                    </div>
                }

                <div className="list-container">
                    <div className="empty-list">
                        <button className="add-button" onClick={() => setDisplayModal(!displayModal)}>
                            <Add className="add-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BucketList;