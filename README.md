# Documentation: Enhancements to File Upload Components with Conditional Rendering of Continue Button

## Overview

This documentation details the enhancements made to the `GuidelinesUpload` and `MedicalRecordUpload` components. The improvements include adding a spinner during the upload process, displaying a success message with a green tick, and conditionally rendering the "Continue" button only when both files have been uploaded.

## Components Affected

1. `DashboardRoot`
2. `GuidelinesUpload`
3. `MedicalRecordUpload`

## Enhancements

### 1. Adding Spinner and Success Message

#### Objective

To provide visual feedback during the file upload process by displaying a spinner for three seconds before showing a success message with a green tick.

#### Implementation

##### State Management

- Introduced `isUploading` state to track the upload status.

##### Import Icons

- Used `AiOutlineLoading3Quarters` from `react-icons/ai` for the spinner.
- Used `FaCheck` from `react-icons/fa` for the green tick.

##### Updated `handleClick` Function

- Set `isUploading` to `true` and used `setTimeout` to simulate a three-second upload time.
- After three seconds, set `isUploading` to `false` and updated the respective file state (`guidelinesFile` or `medicalRecord`).

##### Conditional Rendering

- Display spinner and "Uploading..." message when `isUploading` is `true`.
- Display default upload message if no file is uploaded.
- Display success message with a green tick if the file is uploaded.

### 2. Conditional Rendering of Continue Button

#### Objective

To ensure the "Continue" button is only displayed when both the medical record and guidelines document have been uploaded, providing a clear and guided user experience.

#### Implementation

##### Import `useDashboard` Context

- Ensure the `useDashboard` hook from the dashboard context is imported to access the `guidelinesFile` and `medicalRecord` states.

##### Conditional Rendering

- Use a condition to check if both `guidelinesFile` and `medicalRecord` are present before rendering the "Continue" button. This conditionally renders the button only if both files have been uploaded.

### Key Changes

1. **State Management**:
    - Introduced `isUploading` state variable in both `GuidelinesUpload` and `MedicalRecordUpload` components to track the upload status.

2. **Icon Usage**:
    - Imported and used `AiOutlineLoading3Quarters` for the spinner.
    - Imported and used `FaCheck` for the green tick.

3. **Updated `handleClick` Function**:
    - Set `isUploading` to `true`.
    - Used `setTimeout` to simulate a three-second upload time.
    - After three seconds, set `isUploading` to `false` and updated the file state.

4. **Conditional Rendering**:
    - Displayed spinner and "Uploading..." message while `isUploading` is `true`.
    - Displayed default upload message if the file is not uploaded.
    - Displayed success message with a green tick if the file is uploaded.
    - Conditionally rendered the "Continue" button in `DashboardRoot` component only if both `guidelinesFile` and `medicalRecord` are uploaded.

## Conclusion

These enhancements improve the user experience by providing visual feedback during the file upload process and guiding the user through the necessary steps before proceeding. The spinner indicates that the upload is in progress, and the success message with a green tick confirms that the file has been successfully uploaded. The "Continue" button is only displayed once both files have been uploaded, ensuring that users complete all required steps before moving forward.