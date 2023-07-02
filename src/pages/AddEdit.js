import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import fireDb from "../firebase";
import { toast } from "react-toastify";

export const initialState = {
  title: "",
  tagline: "",
  description: "",
  pinned: false,
  date: new Date().toLocaleDateString("en-IN"),
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const navigate = useNavigate();

  const { title, tagline, description, date, pinned } = state;

  const { id } = useParams();

  useEffect(() => {
    fireDb.child("notes").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
  }, [id]);

  useEffect(() => {
    if (id) {
      setState({ ...data[id], date: new Date().toLocaleDateString("en-IN"), pinned : pinned });
    } else {
      setState({ ...initialState });
    }

    return () => {
        setState({ ...initialState })
    }
  }, [id, data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !tagline || !description) {
      toast.error("Please provide value in each input field");
    } else {
        if(!id) {
            fireDb.child("notes").push(state, (err) => {
                if (err) {
                  toast.error(err);
                } else {
                  toast.success("Note added successfully");
                }
              });
        } else {
            fireDb.child(`notes/${id}`).set(state, (err) => {
                if (err) {
                  toast.error(err);
                } else {
                  toast.success("Note updated successfully");
                }
              });
        }
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center mx-5">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
        </div>

        <form
          action=""
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Note Title"
                id="title"
                name="title"
                value={title || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Note Tagline"
                id="tagline"
                name="tagline"
                value={tagline || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <div className="relative">
              <textarea
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Note Description"
                cols={30}
                rows={5}
                maxLength={150}
                id="description"
                name="description"
                value={description || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className=" w-full inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              {id ? 'Update Note' : 'Add Note'}
            </button>
          </div>
        </form>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="Welcome"
          src="https://media.istockphoto.com/id/1366377291/photo/shot-of-an-unrecognisable-businesswoman-making-notes-in-a-book-in-a-modern-office.webp?b=1&s=170667a&w=0&k=20&c=N5rpxG0ptzt-CmGKL425kl_CLDfGzZNyQHT7EDdrl4k="
          className="absolute inset-0 h-[50%] my-auto w-full object-cover"
        />
      </div>
    </section>
  );
};

export default AddEdit;
