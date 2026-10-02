import { APP_SCRIPT_URL } from "./config";
import type { Content } from "./type";

export const fetchPortfolioData = async (): Promise<Content> => {
    const response = await fetch(APP_SCRIPT_URL, {
        method: "GET",
        redirect: "follow", // This is crucial for Google Apps Script
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    const result = await response.json();

    // console.log("result=====>", result)
    // console.log("data=====>", content)

    return {
        projects: result.projects || [],
        experience: result.experience || [],
        education: result.education || [],
        skills: result.skills || [],
        data: result.data || []
    };
};
