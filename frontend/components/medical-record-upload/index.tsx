"use client";

import { useDashboard } from "@/context/dashboard-context";
import classNames from "classnames";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function MedicalRecordUpload() {
    const { medicalRecord, setMedicalRecord } = useDashboard();
    const [isUploading, setIsUploading] = useState(false);

    const handleClick = () => {
        setIsUploading(true);
        setTimeout(() => {
            setIsUploading(false);
            setMedicalRecord({ url: "/assets/medical-record.pdf" });
        }, 3000);
    };

    return (
        <div className="w-1/2 h-64 border border-4 border-gray-200 border-dashed rounded flex flex-row items-center justify-center">
            <button
                className={classNames(
                    "text-white font-medium py-2 px-4 rounded border border-2",
                    isUploading ? "bg-gray-500 border-gray-500" :
                    medicalRecord === null ? "bg-blue-500 border-blue-500" : "border-transparent text-green-600"
                )}
                onClick={handleClick}
                disabled={isUploading}
            >
                {isUploading && (
                    <span className="flex flex-row gap-1 items-center">
                        <AiOutlineLoading3Quarters className="animate-spin" />
                        <span>Uploading...</span>
                    </span>
                )}
                {!isUploading && medicalRecord === null && <span>Simulate Medical Record Upload</span>}
                {!isUploading && medicalRecord !== null && (
                    <span className="text-green-600 flex flex-row gap-1 items-center">
                        <FaCheck />
                        <span>Medical Record Uploaded</span>
                    </span>
                )}
            </button>
        </div>
    );
}