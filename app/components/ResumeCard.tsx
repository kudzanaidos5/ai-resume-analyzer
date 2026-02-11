import React from "react";
import { Link } from "react-router";

const ResumeCard = () => {
  return (
    <Link
      to={"/resume/${resume.id}"}
      className="resume-card animate-in duration-1000"
    >
      ResumeCard
    </Link>
  );
};

export default ResumeCard;
