import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: "false", msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter item");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "Edited successfully");
    } else {
      showAlert(true, "success", "Added successfully");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, "danger", "Nothing to show :(");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "Removed!");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const targetItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(targetItem.title);
  };
  return (
    <div className="parent">
      <section
        style={{
          backgroundColor: "white",
          width: "80vh",
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          borderRadius: "10px",
          boxShadow: "2px 20px 47px 4px rgba(0, 0, 0, 0.75)",
        }}
      >
        <form onSubmit={handleSubmit}></form>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3
          style={{
            backgroundColor: "white",
            paddingLeft: "140px",
            borderRadius: "5px",
          }}
        >
          TODOs
        </h3>
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "5rem",
            borderRadius: "5px",
          }}
        >
          <input
            type="text"
            placeholder="Add todo..."
            style={{
              borderRadius: "5px",
              borderRadius: "3px solid-black",
              color: "black",
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button type="submit" onClick={handleSubmit} className="button">
            {" "}
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
        {list.length > 0 && (
          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button onClick={clearList} className="button">
              CLEAR TODOs
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
