import React, { useState } from "react";
import { toast } from "react-toastify";
import useMember from "../Hooks/useMember";

const UpdatedTaskModal = ({ update, setModalShow, refetch }) => {
    const [allMember] = useMember();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [member, setMember] = useState('');
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


    const updateTask = () => {
        const _id = update[0]._id;
        const createTask = {
            title,
            description,
            member,
            date
        }
        console.log(createTask)
        if (createTask) {
            fetch(`https://limitless-reaches-16352.herokuapp.com/createTask/${_id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(createTask),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    if (data) {
                        toast.success("Task Updated", { id: 23, position: "top-right" });
                        refetch();

                        setModalShow(null);
                    }
                });
        } else {
            toast.error("Nothing will Changed", { id: 12, position: "top-right" });
        }
    };
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box ">

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Title </span>
                        </label>
                        <input type="text" name='title' placeholder="Wright Title here"
                            onChange={(event) => setTitle(event.target.value)}
                            className="input input-bordered w-full max-w-xs" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name='description' className="textarea textarea-bordered w-full max-w-xs" placeholder="Description"
                            onChange={(event) => setDescription(event.target.value)}
                            required></textarea>

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Assign to</span>
                        </label>
                        <select name='member' className="select select-bordered"
                            onChange={(event) => setMember(event.target.value)}
                            required>
                            <option disabled selected>Select</option>
                            {
                                allMember.map(member => <option
                                    key={member._id}
                                    value={member.name}
                                >
                                    {member.name}
                                </option>

                                )
                            }
                        </select>

                    </div>

                    <div class="mt-5 flex items-center gap-2 justify-center">
                        <label
                            onClick={() => setModalShow(null)}
                            class="hover:bg-white hover:text-black transition-all duration-300 ease-in-out py-3 flex items-center gap-2 bg-yellow-600 text-white px-7 rounded-lg "
                        >
                            Close
                        </label>
                        <label type="submit"
                            className="btn btn-accent "
                            value="Submit"
                            onClick={updateTask}
                        >
                            Update
                        </label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpdatedTaskModal;