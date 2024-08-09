import React from 'react';
import { Head } from '@inertiajs/react';
import { PageProps } from '#types/index';
import AuthenticatedLayout from '#layouts/authenticated-layout';
import UpdateProfileInformationForm from '#app/profile/edit/partials/update-profile-information-form';
import UpdatePasswordForm from '#app/profile/edit/partials/update-password-form';
import DeleteUserForm from '#app/profile/edit/partials/delete-user-form';

export default function Edit({
  auth,
  mustVerifyEmail,
  status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Profile
        </h2>
      }
    >
      <Head title="Profile" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
          <div className="bg-white p-4 shadow dark:bg-gray-800 sm:rounded-lg sm:p-8">
            <UpdateProfileInformationForm
              mustVerifyEmail={mustVerifyEmail}
              status={status}
              className="max-w-xl"
            />
          </div>

          <div className="bg-white p-4 shadow dark:bg-gray-800 sm:rounded-lg sm:p-8">
            <UpdatePasswordForm className="max-w-xl" />
          </div>

          <div className="bg-white p-4 shadow dark:bg-gray-800 sm:rounded-lg sm:p-8">
            <DeleteUserForm className="max-w-xl" />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
