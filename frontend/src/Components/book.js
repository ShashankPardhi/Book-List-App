import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../App";
const BookList = () => {

    const { themes, getData, data } = useContext(ThemeContext)
    const navigate = useNavigate();
    const [search, setSearch] = useState([])
   
    useEffect(() => {
        const token = sessionStorage.getItem('token')

        if (!token) {
            navigate("/")
            alert("Please login ")
            return
        }
        getData()

    }, [])


    return (
        <div  >
            <div className={`con ${themes ? `con-${themes}` : null}`} >
                <div className="book-list-con" >
                    <div className="sur-con" >
                        <div className="flex" >
                            <h3 className={`sur ${themes ? `sur-${themes}` : null}`} >Book List</h3>
                    <div className={`header-con ${themes ? `header-con-${themes}` : null} `} >
                        <h4>Name</h4>
                    </div>

                </div>
            </div>

</div>
</div>
</div>
    )
}
export default BookList;