import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 classNameName="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            <div classNameName="py-12">
                <div classNameName="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div classNameName="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            classNameName="max-w-xl"
                        />
                    </div>

                    <div classNameName="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm classNameName="max-w-xl" />
                    </div>

                    <div classNameName="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <DeleteUserForm classNameName="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
