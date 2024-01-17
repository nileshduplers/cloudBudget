import React from "react";
import "../../components/Technology/Technology.css";

const applicants = [
  {
    name: "Cloud Storage",
    content: "Access your account from anywhere in the world on any device",
    image: "/src/assets/img/ant-design_cloud-download-outline.svg",
  },
  {
    name: "Secure",
    content: "All your information is stored on secure cloud servers",
    image: "/src/assets/img/ant-design_security-scan-outline.svg",
  },

  {
    name: "PDF Download",
    content: "Download any of your reports in PDF format",
    image: "/src/assets/img/iwwa-file-csv.svg",
  },

  {
    name: "CSV Download",
    content: "All your information is stored on secure cloud servers",
    image: "/src/assets/img/iwwa-file-pdf.svg",
  },
];

function Technology() {
  return (
    <section className="technology">
      <div className="container">
        <h2>Technology</h2>
        <div className="d-flex">
          {applicants.map(function (data) {
            return (
              <div className="technology-content">
                <img src={data.image} alt="" />
                <h3>{data.name}</h3>
                <p>{data.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Technology;
