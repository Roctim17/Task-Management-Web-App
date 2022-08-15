import React, { useState } from 'react';
import { toast } from "react-toastify";

const UpdateMemberModal = ({ update, setModalShow, refetch }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const updateMember = () => {
        const _id = update[0]._id;
        console.log('this', _id)
        const createMember = {
            name,
            email
        }
        console.log(createMember)
        if (createMember) {
            fetch(`https://limitless-reaches-16352.herokuapp.com/member/${_id}`, {
                method: "put",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(createMember),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    if (createMember) {
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
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div className="modal">
                <div className="modal-box md:w-4/12 mt-10 w-10/12 mx-auto relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-koulen text-center text-accent font-bold mb-4">
                        Update Member
                    </h3>

                    <div className="flex flex-col font-koulen space-y-2">
                        <input
                            onChange={(event) => setName(event.target.value)}
                            type="text"
                            name="name"
                            placeholder="name"
                            className="input input-bordered w-full"
                            required
                        />
                        <input
                            onChange={(event) => setEmail(event.target.value)}
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered w-full"
                            required
                        />

                        <input
                            onClick={updateMember}
                            type="submit"
                            className="btn btn-accent "
                            value="Update"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpdateMemberModal;