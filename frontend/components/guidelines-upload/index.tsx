"use client";

import { useDashboard } from "@/context/dashboard-context";
import classNames from "classnames";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";

export default function GuidelinesUpload() {
    const { guidelinesFile, setGuidelinesFile, medicalRecord } = useDashboard();
    const [isUploading, setIsUploading] = useState(false);

    const handleClick = () => {
        if (!medicalRecord) {
            toast.error("Please upload a Medical Record first.");
            return;
        }

        setIsUploading(true);
        setTimeout(() => {
            setIsUploading(false);
            setGuidelinesFile({ url: "/assets/guidelines.pdf" });
        }, 3000);
    };

    return (
        <div className="w-1/2 h-64 border border-4 border-gray-200 border-dashed rounded flex flex-row items-center justify-center">
            <button
                className={classNames(
                    "text-white font-medium py-2 px-4 rounded border border-2",
                    isUploading ? "bg-gray-500 border-gray-500" :
                    guidelinesFile === null ? "bg-orange-500 border-orange-500" : "border-transparent text-green-600"
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
                {!isUploading && guidelinesFile === null && <span>Simulate Guidelines Upload</span>}
                {!isUploading && guidelinesFile !== null && (
                    <span className="text-green-600 flex flex-row gap-1 items-center">
                        <FaCheck />
                        <span>Guidelines File Uploaded</span>
                    </span>
                )}
            </button>
        </div>
    );
}
