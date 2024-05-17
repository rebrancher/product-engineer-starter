# Documentation: Enhancements to File Upload Components with Conditional Rendering and Toast Notifications

## Overview

This documentation details the enhancements made to the `GuidelinesUpload` and `MedicalRecordUpload` components. The improvements include adding a spinner during the upload process, displaying a success message with a green tick, conditionally rendering the "Continue" button only when both files have been uploaded, and ensuring that the guidelines file cannot be uploaded until the medical record has been uploaded, with appropriate toast notifications.

## Components Affected

1. `DashboardContext`
2. `RootLayout`
3. `GuidelinesUpload`
4. `MedicalRecordUpload`
5. `DashboardRoot`

## Enhancements

### 1. DashboardContext

- **State Management**: The context provides state management for the uploaded medical record and guidelines files.
- **Context Provider**: The `DashboardProvider` wraps the application to provide these states to all components.

### 2. RootLayout Component

- **ToastContainer Integration**: Included the `ToastContainer` from `react-toastify` to display toast notifications globally throughout the application.

### 3. GuidelinesUpload Component

- **State Management**: Uses state to manage the upload process and display a spinner while uploading.
- **Conditional Check**: Checks if the medical record has been uploaded before allowing the guidelines file to be uploaded.
- **Toast Notification**: If the medical record is not uploaded, a toast notification is displayed to inform the user to upload the medical record first.
- **Success Message**: Displays a success message with a green tick upon successful upload of the guidelines file.

### 4. MedicalRecordUpload Component

- **State Management**: Uses state to manage the upload process and display a spinner while uploading.
- **Success Message**: Displays a success message with a green tick upon successful upload of the medical record.

### 5. DashboardRoot Component

- **Conditional Rendering of Continue Button**: The "Continue" button is only rendered when both the medical record and guidelines files have been uploaded, ensuring the user completes the required steps before proceeding.

## Key Changes

1. **State Management**:
   - Introduced `isUploading` state variable in both `GuidelinesUpload` and `MedicalRecordUpload` components to track the upload status.
   - Managed `medicalRecord` and `guidelinesFile` states in the `DashboardContext`.

2. **Icon Usage**:
   - Used `AiOutlineLoading3Quarters` for the spinner to indicate the upload process.
   - Used `FaCheck` for the green tick to indicate successful upload.

3. **Conditional Logic**:
   - In `GuidelinesUpload`, a check ensures that the medical record is uploaded before allowing the guidelines file upload. If not, a toast notification is displayed.
   - The "Continue" button in `DashboardRoot` is only displayed if both files are uploaded.

4. **Toast Notifications**:
   - Integrated `react-toastify` to display user-friendly notifications for guiding the upload sequence and indicating errors.

## Conclusion

These enhancements improve the user experience by providing visual feedback during the file upload process and guiding the user through the necessary steps before proceeding. The spinner indicates that the upload is in progress, and the success message with a green tick confirms that the file has been successfully uploaded. The "Continue" button is only displayed once both files have been uploaded, ensuring that users complete all required steps. Additionally, toast notifications provide immediate feedback if the user attempts to upload files in the incorrect sequence.