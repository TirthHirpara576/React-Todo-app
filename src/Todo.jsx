// Lec - 80 : Build Awesome Todo App using Hooks in react
/*  
import React, { useState } from "react";
import './index.css';
const Todo = (props ) => {
    const [ inputData , setInputData ] = useState('');
    const [ items , setItems ] = useState([]);

    const addItem = () => {
        if(inputData){
            setItems([...items , inputData]); //Add current data into items[] , current element (inputData) + previous elements. [ni andar lakhvano meaning] -> state remain as a Array
            setInputData(""); // after adding currData in Array, clear the input field.
        }
        else{ 
            // kai nai   
        }
        // after adding currData in Array, simply render all items[] using map-method. & darek element ni ak unique id hovi j joiye.
    }

    const deleteItem = (id) => { //fat arrow function thi j parameter pass kari shakashe -> index/id
        const Remaining_elements = items.filter((element,index) => { // similar to map method
            return index !== id;
        });
        setItems(Remaining_elements);
    }

    const RemoveAllElements = () => { // ✎
        setItems([]); // khali empty array aapi devano...
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <h1>Add your List Here ✌️</h1>
                    <div className="addItems">
                        <input type="text" value={inputData} onChange={(e)=> setInputData(e.target.value) } placeholder="✍️ Add items..." />
                        <button className="plus-btn" onClick={addItem}>+</button>
                    </div>
                    <div className="showItems">
                        {
                            items.map((value,index) => {
                                return (
                                    <div className="eachItems" key={index}>
                                        <h3>{value}</h3> <button className="delete-btn" onClick={ () => deleteItem(index) }>-</button>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <button className="btn effect04" onClick={RemoveAllElements}>
                        <span>REMOVE ALL</span>
                    </button>
                </div>
            </div>
        </>
    );

};
export default Todo;  */



// this is for Edit :-
/*   
import React, { useState } from "react";
import './index.css';
const Todo = (props) => {

    const [ inputData , setInputData ] = useState('');
    const [ items , setItems ] = useState([]); // Now, items[] -> array of object(data + kyare add karyo to -> time)
    const [ toggleBtn , setToggleBtn ] = useState(true);
    const [ editId , setEditId ] = useState(null); // after toggling, mane kem khabar pade k new value ne kya Update karvani chhe?

    const addItem = () => {
        if(!inputData){
            // kai nai  
        }
        else if(inputData && !toggleBtn){
            setItems(
                items.map((ob) => {
                    if(ob.id === editId){
                        return { ...ob , data : inputData }  //new ob = previous ob , but with updated data 
                    }
                    return ob; // map method ma kaik to return karvu j pade...
                })
            );
            setToggleBtn(true);
            setInputData('');
            setEditId(null);
        }
        else{ 
            const currInputData = { id:new Date().getTime().toString() , data:inputData };
            setItems([...items , currInputData]); //Add current Object into items[] , current object (currInputData) + previous objects. [ni andar lakhvano meaning] -> state remain as a Array
            setInputData(""); // after adding currData in Array, clear the input field. 
        }
        // after adding currData in Array, simply render all items[] using map-method. & darek object pase ak unique id chhe.
    }

    const deleteItem = (Id) => { //fat arrow function thi j parameter pass kari shakashe -> ob.id/Id
        const Remaining_elements = items.filter((element) => { // similar to map method (element = ob)
            return element.id !== Id;
        });
        setItems(Remaining_elements);
    }

    // when user click on "edit" button,
    // 1. get the id & data (Edited_object) which user clicked to edit.
    // 2. toggle '+' to '✎'
    // 3. Now, update the value of setInput with new updated value.
    // 4. To pass the current element Id to new state variable for reference

    const editItem = (Id) => { //fat arrow function thi j parameter pass kari shakashe -> ob.id/Id
        let Edited_object = items.find((element) => { // similar to filter method
            return element.id === Id;
        });
        setToggleBtn(false);
        setInputData(Edited_object.data);
        setEditId(Id);
    }

    const RemoveAllElements = () => { // 
        setItems([]); // Just pass empty array of object...
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <h1>Add your List Here ✌️</h1>
                    <div className="addItems">
                        <input type="text" value={inputData} onChange={(e)=> setInputData(e.target.value) } placeholder="✍️ Add items..." />
                        { toggleBtn ? <button className="plus-btn" onClick={addItem}>+</button> : <button className="plus-btn" onClick={addItem}>✎</button> }
                    </div>
                    <div className="showItems">
                        {
                            items.map((ob) => {
                                return (
                                    <div className="eachItems" key={ob.id}>
                                        <h3>{ob.data}</h3>
                                        <div className="btn-group">
                                            <button className="edit-btn" onClick={() => editItem(ob.id)}>✎</button>
                                            <button className="delete-btn" onClick={() => deleteItem(ob.id)}>🗑</button>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <button className="btn effect04" onClick={RemoveAllElements}>
                        <span>REMOVE ALL</span>
                    </button>
                </div>
            </div>
        </>
    );

};

export default Todo;
*/





