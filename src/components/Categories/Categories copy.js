import React, { useState } from "react"
import "./categories.css"
export default function Categories({ list }) {
    const [activeCat, setactiveCat] = useState({});
    function selectCat(event){
        let catId = event.target.id;
        if(!activeCat.hasOwnProperty(catId)){
            setactiveCat(prevStatus => ({
                ...prevStatus,
                [catId]:true
            }));
        }else{
            setactiveCat(prevStatus => ({
                ...prevStatus,
                [catId]: !prevStatus[catId]
            }));
        }
    }
    return (
        <div className="categories-list">
            <section className="categories">
                {list.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <input type="checkbox" id={"cat-" + index} onChange={selectCat}/>
                            <label id={"cat-" + index+"-label"} htmlFor={"cat-" + index} className={!activeCat["cat-" + index] ? "category":"category-selected"} key={index}>{item}</label>

                        </React.Fragment>
                    )
                })}
            </section>
        </div>
    )
}