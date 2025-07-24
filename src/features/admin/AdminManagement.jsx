import React from 'react';
import { AdminProvider } from './AdminProvider';
import AdminLayout from '../../layouts/AdminLayout';

export const AdminManagement = () => {
    return (
        <AdminProvider>
            <AdminManagementContent></AdminManagementContent>
        </AdminProvider>
    );
};

AdminManagement.displayName='AdminManagement'

const AdminManagementContent = () => {
    return (
        <>
            <AdminLayout></AdminLayout>    
        </>
    );
};

AdminManagementContent.displayName='AdminManagementContent'
