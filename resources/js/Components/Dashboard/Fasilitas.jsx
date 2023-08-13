
import React from 'react';

import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Fasilitas = ({ auth, fasiltas }) => {

    const [showModal, setShowModal] = useState(false);
    const [titleValue, setTitleValue] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [descriptionValue, setDescriptionValue] = useState('');
    const [fasiltasList, setFasiltasList] = useState(fasiltas);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [updatedModalOpen, setUpdatedModalOpen] = useState(false);
    const [editingItemId, setEditingItemId] = useState(null);

    const handleDelete = async (id) => {
        try {
            await Inertia.delete(`/fasiltas/${id}`);
            const updatedFasiltas = fasiltas.filter(item => item.id !== id);
            setFasiltasList(updatedFasiltas);
        } catch (error) {
            console.error(error);
        }
    };

    return (

        <div>

            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="py-3 pl-2">
                        <button
                            className="bg-[#F39F19] text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(true)}
                        >
                            Create Data
                        </button>
                        {showModal ? (
                            <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-full my-6 mx-auto max-w-3xl">
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                <h3 className="text-3xl font-semibold">
                                                    Create Data Fasilitas
                                                </h3>
                                                <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">

                                                    </span>
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <div className="relative p-6 flex-auto">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" >
                                                    Title
                                                </label>
                                                <div className="mb-3 pt-0">
                                                    <input
                                                        type="text"
                                                        placeholder="Placeholder"
                                                        className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                                        value={titleValue}
                                                        onChange={e => setTitleValue(e.target.value)}
                                                    />
                                                </div>

                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="description">
                                                    Description
                                                </label>
                                                <textarea
                                                    id="description"
                                                    className="block w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-300 shadow outline-none focus:outline-none focus:ring focus:ring-blue-300 resize-none"
                                                    value={descriptionValue}
                                                    onChange={e => setDescriptionValue(e.target.value)}
                                                />


                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">Upload Image</label>
                                                <input
                                                    className="block w-full px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                                    id="multiple_files"
                                                    type="file"
                                                    multiple
                                                    onChange={e => setImageFile(e.target.files[0])}
                                                />

                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                <button
                                                    className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Close
                                                </button>
                                                <button
                                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={async () => {
                                                        const formData = new FormData();
                                                        formData.append('title', titleValue);
                                                        formData.append('description', descriptionValue);
                                                        formData.append('image', imageFile);
                                                        try {
                                                            await Inertia.post('/fasiltas', formData);
                                                            setShowModal(false);
                                                        } catch (error) {
                                                            console.error(error);
                                                        }
                                                    }}
                                                >
                                                    Save
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null}

                    </div>

                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3 pl-4">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="checkbox-all"
                                                    type="checkbox"
                                                    className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                                />
                                                <label
                                                    htmlFor="checkbox"
                                                    className="sr-only"
                                                >
                                                    Checkbox
                                                </label>
                                            </div>
                                        </th>
                                        <th
                                            scope="col"
                                            className="flex items-center px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            <span className="inline-flex items-center">
                                                Title
                                            </span>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            <span className="inline-flex items-center">
                                                Description
                                            </span>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            <span className="inline-flex items-center">
                                                Image
                                            </span>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {fasiltas.map(item => (
                                        <tr key={item.id}>
                                            <td className="py-3 pl-4">
                                            </td>
                                            <td className="px-6 py-3 text-sm text-gray-500">
                                                {item.id}
                                            </td>
                                            <td className="px-6 py-3 text-sm text-gray-500">
                                                {item.title}
                                            </td>
                                            <td className="px-6 py-3 text-sm text-gray-500">
                                                {item.description}
                                            </td>
                                            <td className="px-6 py-3 text-sm text-gray-500">
                                                <img
                                                    src={`storage/${item.image}`}
                                                    alt={item.title}
                                                    className="w-16 h-16 object-cover rounded-full"
                                                />
                                            </td>
                                            <td className="px-6 py-3 text-sm text-right">
                                                <button className="text-blue-500 hover:underline mr-2" onClick={() => handleEdit(item.id)}>
                                                    Edit
                                                </button>
                                                {updatedModalOpen ? (
                                                    <>
                                                        <div
                                                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                                        >
                                                            <div className="relative w-full my-6 mx-auto max-w-3xl">
                                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                                        <h3 className="text-3xl font-semibold">
                                                                            Edit Data Fasilitas
                                                                        </h3>
                                                                        <button
                                                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                                            onClick={() => setUpdatedModalOpen(false)}
                                                                        >
                                                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                                                ×
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="relative p-6 flex-auto">
                                                                      
                                                                        {/* Edit form fields */}
                                                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                                                            Title
                                                                        </label>
                                                                        <div className="mb-3 pt-0">
                                                                            <input
                                                                                type="text"
                                                                                placeholder="Placeholder"
                                                                                name="title"
                                                                                className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                                                                value={titleValue}
                                                                                onChange={e => setTitleValue(e.target.value)}
                                                                            />
                                                                        </div>
                                                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="description">
                                                                            Description
                                                                        </label>
                                                                        <textarea
                                                                            id="description"
                                                                            className="block w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border border-gray-300 shadow outline-none focus:outline-none focus:ring focus:ring-blue-300 resize-none"
                                                                            value={descriptionValue}
                                                                            onChange={e => setDescriptionValue(e.target.value)}
                                                                        />
                                                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">
                                                                            Upload Image
                                                                        </label>
                                                                        <input
                                                                            className="block w-full px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                                                            id="multiple_files"
                                                                            type="file"
                                                                            multiple
                                                                            onChange={e => setImageFile(e.target.files[0])}
                                                                        />
                                                                    </div>
                                                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                                        <button
                                                                            className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                            type="button"
                                                                            onClick={() => setUpdatedModalOpen(false)}
                                                                        >
                                                                            Close
                                                                        </button>
                                                                        <button
                                                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                            type="button"
                                                                            onClick={async () => {
                                                                                console.log("editingItemId:", editingItemId);
                                                                                console.log("titleValue:", titleValue);
                                                                                console.log("descriptionValue:", descriptionValue);
                                                                                console.log("imageFile:", imageFile);
                                                                                const formData = new FormData();
                                                                                formData.append('title', titleValue);
                                                                                formData.append('description', descriptionValue);
                                                                                formData.append('image', imageFile);
                                                                                try {
                                                                                    await Inertia.patch(`/fasiltas/${editingItemId}`, formData);
                                                                                    
                                                                                    const updatedFasiltasList = fasiltasList.map(item => {
                                                                                        if (item.id === editingItemId) {
                                                                                            return {
                                                                                                ...item,
                                                                                                title: titleValue,
                                                                                                description: descriptionValue,
                                                                                               
                                                                                            };
                                                                                        }
                                                                                        return item;
                                                                                    });

                                                                                    setFasiltasList(updatedFasiltasList);
                                                                                    setUpdatedModalOpen(false); 
                                                                                    console.log("After update:", updatedFasiltasList);
                                                                                    console.log("After update editingItemId:", editingItemId);
                                                                                    console.log("After update titleValue:", titleValue);
                                                                                    console.log("After update descriptionValue:", descriptionValue);
                                                                                    console.log("After update imageFile:", imageFile);
                                                                                } catch (error) {

                                                                                    console.error(error);
                                                                                }


                                                                            }}
                                                                        >
                                                                            Save Changes
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                                    </>
                                                ) : null}

                                                <button className="text-red-500 hover:underline" onClick={() => setDeleteModalOpen(true)}>
                                                    Delete
                                                </button>
                                                {isDeleteModalOpen ? (
                                                    <div id="deleteModal" className="z-40 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                                        <div className="relative p-4 w-full max-w-md h-full md:h-auto">

                                                            <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                                                                <button type="button" onClick={() => setDeleteModalOpen(false)} className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deleteModal">
                                                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                                    <span className="sr-only">Close modal</span>
                                                                </button>
                                                                <svg className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                                                <p className="mb-4 text-gray-500 dark:text-gray-300">Are you sure you want to delete this item?</p>
                                                                <div className="flex justify-center items-center space-x-4">
                                                                    <button data-modal-toggle="deleteModal" type="button" onClick={() => setDeleteModalOpen(false)} className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                                                        No, cancel
                                                                    </button>
                                                                    <button type="submit" onClick={() => handleDelete(item.id)} className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                                                                        Yes, I'm sure
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : null}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Fasilitas;