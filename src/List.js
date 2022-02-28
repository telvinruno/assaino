import React from "react";

function List({ items, removeItem, editItem }) {
  return (
    <>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article
            key={id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              backgroundColor: "white",
              gap: "3rem",
            }}
          >
            <p
              style={{
                backgroundColor: "grey",
                width: "200px",
                height: "40px",
                borderRadius: "5px",
                wordWrap: "break-word",
              }}
            >
              {title}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                gap: "5rem",
                backgroundColor: "white",
              }}
            >
              <button
                type="button"
                onClick={() => editItem(id)}
                className="button"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => removeItem(id)}
                className="button"
              >
                Delete
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
}
export default List;
