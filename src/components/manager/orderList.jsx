import React, { useEffect, useState } from "react";
import { deleteMeeting, getMeetings, updateMeeting } from "../../api/meeting.api";
import "../../css/orders.css";
import { Helmet } from "react-helmet";


export const OrderList = () => {

    const [dataOrders, setDataOrders] = useState(null);
    const [displayEditForm, setDisplayEditForm] = useState(false);
    const [idForm, setIdForm] = useState(null);
    const [editItem, setEditItem] = useState(null);
    const [dataOrdersSortDate, setDataOrdersSortDate] = useState(null);
    const [dataOrdersSortName, setDataOrdersSortName] = useState(null);


    const getAllOrders = async () => {
        const orders = await getMeetings();
        const { data } = orders;
        setDataOrders(data);
        console.log(data);
    }

    //רינדור רשימת הפגישות בפעם הראשונה שנכנסים לעמוד
    useEffect(() => {
        getAllOrders();
    }, []);
    
    //רינדור הפריט שמתעדכן בכל פעם
    useEffect(() => {
        console.log("hii");
        if (editItem) {
            console.log("insert if");
            updateMeeting(editItem.id, editItem)
        }
    }, [editItem]);

    //פונקציה לטיפול מתי יוצג טופס העריכה
    const handleEditForm = (EditForm) => {
        console.log(EditForm)
        setDisplayEditForm(EditForm)

    }
    //פונקציה לעידכון ה-id
    const updateId = (id) => {
        console.log(id);
        setIdForm(id);
    }
    // פונקציה למחיקת הנתונים שמעדכנת ב- דטה אורדרס את הנתונים שהתקבלו לאחר הפילטר ושולחת לקריאת שרת delete
    //למחיקה מה-json
    const delMeeting = async (id) => {
        const updatedOrders = dataOrders.filter(order => order.id != id)
        setDataOrders(updatedOrders);
        deleteMeeting(updatedOrders);
    }

    //פונקציה שמקבלת את הנתונים שהתעדכנו ושולחת לקריאת השרת -put
    const editMeeting = async (event) => {
        event.preventDefault();
        setEditItem({ ...editItem, [event.target.name]: event.target.value });
        const updatedDataOrders = dataOrders.map(order => {
            if (order.id === editItem.id) {
                return { ...order, [event.target.name]: event.target.value };
            }
            return order;
        });
        setDataOrders(updatedDataOrders);
    };

    //פונקציה למיון האובייקטים לפי שם לקוח
    const sortDataOrdersByName = () => {
        setDataOrdersSortName(dataOrders.sort((a, b) => {
            return a.name.localeCompare(b.name);
        }))
    }

    //פונקציה למיון האובייקטים לפי תאריך
    const sortDataOrdersByDate = () => {
        console.log("sort");
        setDataOrdersSortDate(dataOrders.sort((a, b) => {
            return new Date(a.date) - new Date(b.date)
        })
        )

    };


    return <div className="order">
        <button id="btn-orders" onClick={() => sortDataOrdersByDate()}>מיון הפגישות לפי תאריך</button>
        <button id="btn-orders" onClick={() => sortDataOrdersByName()}>מיון הפגישות לפי שם לקוח</button>


        {dataOrders ? <ul> {dataOrders.map(order => <li key={order.id}><button title="למחיקת פגישה" onClick={() => { delMeeting(order.id) }} className="deleteMeeting">
            <Helmet>
                <script src="https://cdn.lordicon.com/lordicon.js"></script>
            </Helmet>
            <lord-icon
                src="https://cdn.lordicon.com/hjbrplwk.json"
                trigger="loop"
                delay="500"
                colors="primary:#646e78,secondary:#c79816,tertiary:#ebe6ef,quaternary:#3a3347"
                style={{ width: '50px', height: '50px' }}>
            </lord-icon>
        </button>
            <button className="edit" title="לעדכון פגישה" onClick={() => { handleEditForm(!displayEditForm); updateId(order.id); setEditItem(order) }}>
                <Helmet>
                    <script src="https://cdn.lordicon.com/lordicon.js"></script>
                </Helmet>
                <lord-icon
                    src="https://cdn.lordicon.com/vhyuhmbl.json"
                    trigger="loop"
                    delay="500"
                    colors="primary:#ebe6ef,secondary:#c79816,tertiary:#3a3347"
                    style={{ width: '50px', height: '50px' }}>
                </lord-icon>
            </button>
            {displayEditForm && idForm === order.id ?
                <div className="inputsForEdit">
                    <label>עדכון שם</label>
                    <input type="text" name="name" onChange={editMeeting} />
                    <tt></tt>
                    <br />


                    <label>סוג שירות</label>
                    <input type="text" name="optionServiice" onChange={editMeeting} />
                    <tt></tt>
                    <br />

                    <label>תאריך</label>
                    <input type="text" name="date" onChange={editMeeting} />
                    <tt></tt>
                    <br />

                    <label>הערה</label>
                    <input type="text" name="note" onChange={editMeeting} />
                    <tt></tt>
                    <br />

                    <label>טלפון</label>
                    <input type="text" name="phone" onChange={editMeeting} />
                    <tt></tt>
                    <br />


                    <label>שעת התחלה</label>
                    <input type="text" name="startTime" onChange={editMeeting} />
                    <tt></tt>
                    <br />

                    <label>משך זמן הפגישה</label>
                    <input type="text" name="duration" onChange={editMeeting} />
                    <tt></tt>
                    <br />

                </div>

                : ''}
                
            <br />שם המזמין :    {order.name}<br /><br />  סוג השירות :  {order.optionServiice}<br />תאריך :   {order.date}<br />הערה :    {order.note}<br />מספר טלפון  :   {order.phone}<br />מזהה פגישה  :    {order.id}<br />שעת התחלה :   {order.startTime}<br />משך זמן הפגישה :    {order.duration},
        </li>)} </ul> : ''}

    </div>
}