import React from "react";
import "./CustomForm.css";

function CustomForm(props) {
  return (
    <div className="form-container">
      {Object.keys(props).map((key) =>
        props[key].isInput ? (
          <>
            <label htmlFor={props[key].label}>{props[key].label}</label>
            <input
              className="form-input"
              key={key}
              ref={props[key].ref}
              type={props[key].type}
              id={props[key].label}
              placeholder={props[key].placeholder}
            />
          </>
        ) : (
          <button
            className="form-button"
            key={key}
            type="submit"
            onClick={props[key].handler}
          >
            {props[key].buttonText}
          </button>
        )
      )}
      <button className="form-button" type="button" onClick={props.onEdit}>
        Edit
      </button>
      <button className="form-button" type="button" onClick={props.onCancel}>
        Cancel
      </button>

      .form-button {
        background-color: #4CAF50; /* Green background */
      border: none; /* Remove borders */
      color: white; /* White text */
      padding: 15px 32px; /* Some padding */
      text-align: center; /* Centered text */
      text-decoration: none; /* Remove underline */
      display: inline-block; /* Make the buttons appear side by side */
      font-size: 16px; /* Increase font size */
      margin: 4px 2px; /* Add some margin */
      cursor: pointer; /* Add a pointer cursor on hover */
      border-radius: 12px; /* Rounded corners */
    }

      .form-button:hover {
        background-color: #45a049; /* Darker green on hover */
    }


    </div>
  );
}

export default CustomForm;
