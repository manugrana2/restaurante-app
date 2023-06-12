import React from "react"
import "./categories.css"
export default function Categories({ list }) {
    return (
        <div className="categories-list">
            <section className="categories">
                {list.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <input type="checkbox" id={"cat-"+index}/>
                            <label id={"cat-" + index+"-label"} htmlFor={"cat-"+index} className="category" key={index}>{item}</label>

                        </React.Fragment>
                    )
                })}
            </section>
        </div>
    )
}