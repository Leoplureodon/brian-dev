import axios from "axios";

const backendAPIAdress: string = import.meta.env.VITE_BE_API_ADDRESS;

export const DownloadCV = async () => {
  try {
    const response = await axios.get(backendAPIAdress + "FileServer/cv", {
      responseType: "blob", // Important to receive the file as a blob
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Brian-ORourke-CV.pdf"); // Filename for download
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    console.error("Error downloading the PDF", error);
  }
};
