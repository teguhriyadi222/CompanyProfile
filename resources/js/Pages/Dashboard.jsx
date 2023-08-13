import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Fasilitas from '@/Components/Dashboard/Fasilitas';

export default function Dashboard({ auth, fasiltas, message }) {
    const [showModal, setShowModal] = useState(false);
    const [titleValue, setTitleValue] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [descriptionValue, setDescriptionValue] = useState('');
    const [fasiltasList, setFasiltasList] = useState(fasiltas);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [updatedModalOpen, setUpdatedModalOpen] = useState(false);
    const [editingItemId, setEditingItemId] = useState(null);
    const [deletingMessageId, setDeletingMessageId] = useState(null);


    const [showFasilitasSection, setShowFasilitasSection] = useState(true);
    const [showMessageSection, setShowMessageSection] = useState(false);
    console.log("massage", message);
    console.log("fasiltas", fasiltas);

    const handleDelete = async (id) => {
        try {
            await Inertia.delete(`/message/${id}`);
            const updatedFasiltas = message.filter(item => item.id !== id);
            setFasiltasList(updatedFasiltas);
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (id) => {
        const selectedItem = fasiltas.find(item => item.id === id);
        setTitleValue(selectedItem.title);
        setDescriptionValue(selectedItem.description);
        setEditingItemId(id);
        setUpdatedModalOpen(true);

    };

    const confirmDelete = (id) => {
        setDeletingMessageId(id);
        setDeleteModalOpen(true);
    };

    const handleFasilitasClick = () => {
        setShowFasilitasSection(true);
        setShowMessageSection(false);
    };

    const handleGalleryClick = () => {
        setShowFasilitasSection(false);
        setShowMessageSection(true);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >

            <Head title="Dashboard" />

            <div className="flex">
                <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <h2 className="text-xl font-bold">Dashboard</h2>
                        </div>
                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                                <li className="rounded-sm">
                                    <a href="#" className={`nav-link flex items-center p-2 space-x-3 rounded-md hover:bg-[#F39F19] ${showFasilitasSection ? "active:bg-blue-500" : ""
                                        }`} onClick={handleFasilitasClick}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        </svg>
                                        <span>Data Fasilitas</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a href="#" className="nav-link flex items-center p-2 space-x-3 rounded-md hover:bg-[#F39F19]" onClick={handleGalleryClick}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        </svg>
                                        <span>Data Message</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto mt-12">
                    {showFasilitasSection && (
                        <Fasilitas fasiltas={fasiltas} />
                    )}
                    {showMessageSection && (
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
                                                    Name
                                                </span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                <span className="inline-flex items-center">
                                                    Email
                                                </span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                            >
                                                <span className="inline-flex items-center">
                                                    Massege
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
                                        {message.map((item) => (
                                            <tr key={item.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {/* ... Checkbox ... */}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {item.id}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {item.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {item.email}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {item.message}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button className="text-red-500 hover:underline" onClick={() => confirmDelete(item.id)}>
                                                        Delete
                                                    </button>
                                                    {isDeleteModalOpen && (
                                                        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                                                            <div className="relative w-auto max-w-lg mx-auto my-6">
                                                                <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                                                    <div className="relative p-6 text-center">
                                                                        <h3 className="text-lg font-semibold">
                                                                            Are you sure you want to delete this message?
                                                                        </h3>
                                                                    </div>
                                                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                                        <button
                                                                            className="px-6 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                                                                            onClick={() => handleDelete(deletingMessageId)}
                                                                        >
                                                                            Delete
                                                                        </button>
                                                                        <button
                                                                            className="px-6 py-2 ml-4 text-white bg-blue-500 rounded hover:bg-blue-600"
                                                                            onClick={() => {
                                                                                setDeletingMessageId(null);
                                                                                setDeleteModalOpen(false);
                                                                            }}
                                                                        >
                                                                            Cancel
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    )}
                </div>
            </div>
            {/*modal delete*/}

        </AuthenticatedLayout>
    );
}
