import React, { useState } from "react";
import { BsPinAngle } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import fireDb from "../firebase";
import { toast } from "react-toastify";

const Card = ({ title, tagline, description, pinned, date, id }) => {
  
  const onDelete = (id) => {
    fireDb.child(`notes/${id}`).remove((err) => {
      if (err) {
        toast.error(err);
      } else {
        toast.success("Note deleted successfully");
      }
    });

  };
  return (
    <div className="max-w-2xl px-8 py-4 mx-auto rounded-lg shadow-md bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light  text-gray-400">{date}</span>
        <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded hover:bg-gray-500">
          {tagline}
        </a>
      </div>
      <div className="mt-2">
        <h5 className="text-xl text-center font-bold text-gray-200 ">
          {title}
        </h5>
        <p className="mt-2 text-gray-300 min-h-[100px]">{description}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <Link
          to={`/add/${id}`}
          className="px-4 py-2 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded  hover:bg-gray-500"
        >
          Update
        </Link>
        <div className="flex items-center">
          <BsPinAngle className="bg-white w-10 h-10 mx-4 rounded-full p-2 cursor-pointer" />

          <AiFillDelete
            className="bg-white w-10 h-10 mx-4 rounded-full p-2 cursor-pointer"
            onClick={() => {
              onDelete(id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
