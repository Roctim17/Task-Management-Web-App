import React from "react";
import { toast } from "react-toastify";
import useMember from "../Hooks/useMember";

const UpdatedTaskModal = ({ update, setModalShow, refetch }) => {
    const [allMember] = useMember();


    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const updatingTask = (event) => {
        const _id = update._id;
        event.preventDefault();
        const member = event.target.member.value;
        const updatedTask = {
            title: event.target.title.value,
            member,
            date,
            description: event.target.description.value,
        }
        fetch(`https://limitless-reaches-16352.herokuapp.com/updatedTask/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedTask),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    toast.success("Updated Done", { id: 23, position: "top-right" });
                    setModalShow(null);
                    refetch();

                }
            });

    };

    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box ">
                    <form action="" onSubmit={updatingTask}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Title </span>
                            </label>
                            <input type="text" name='title' placeholder="Wright Title here" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name='description' className="textarea textarea-bordered h-24" placeholder="Description"></textarea>

                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Assign to</span>
                            </label>
                            <select name='member' className="select select-bordered">
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
                            >
                                Update
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatedTaskModal;