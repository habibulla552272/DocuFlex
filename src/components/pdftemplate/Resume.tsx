'use client'
import { useState } from "react";
import { FaPlus, FaMinus, FaDownload } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { PDFDownloadLink } from "@react-pdf/renderer";
import Link from "next/link";
import ResumePDF from "./ResumePDF";


interface Experience {
  company: string;
  location: string;
  designation: string;
  duration: string;
  description: string;
}

interface Education {
  university: string;
  location: string;
  degree: string;
  duration: string;
  courses: string;
}

interface ResumeData {
  name: string;
  email: string;
  phone: string;
  education: Education;
  studyAbroad?: Education;
  experiences: Experience[];
  leadership: string[];
  languages: string;
  skills: string;
  interests: string;
}

const Resume = () => {
  const [formData, setFormData] = useState<ResumeData>({
    name: "",
    email: "",
    phone: "",
    education: {
      university: "",
      location: "",
      degree: "",
      duration: "",
      courses: "",
    },
    experiences: [{ company: "", location: "", designation: "", duration: "", description: "" }],
    leadership: [""],
    languages: "",
    skills: "",
    interests: "",
  });

  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [...formData.experiences, { company: "", location: "", designation: "", duration: "", description: "" }],
    });
  };

  const removeExperience = (index: number) => {
    setFormData({
      ...formData,
      experiences: formData.experiences.filter((_, i) => i !== index),
    });
  };

  const updateExperience = (index: number, field: keyof Experience, value: string) => {
    const updated = [...formData.experiences];
    updated[index] = { ...updated[index], [field]: value };
    setFormData({ ...formData, experiences: updated });
  };

  const addLeadership = () => {
    setFormData({ ...formData, leadership: [...formData.leadership, ""] });
  };

  const removeLeadership = (index: number) => {
    setFormData({
      ...formData,
      leadership: formData.leadership.filter((_, i) => i !== index),
    });
  };

  const updateLeadership = (index: number, value: string) => {
    const updated = [...formData.leadership];
    updated[index] = value;
    setFormData({ ...formData, leadership: updated });
  };

  return (
    <section className="min-h-screen bg-background py-10 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Resume Builder</h1>

          <form className="space-y-8">
            {/* Personal Info */}
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Enter your name"
                className="text-2xl font-bold"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold border-b-2 border-primary pb-2">EDUCATION</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="University Name"
                  className="font-semibold"
                  value={formData.education.university}
                  onChange={(e) =>
                    setFormData({ ...formData, education: { ...formData.education, university: e.target.value } })
                  }
                />
                <Input
                  type="text"
                  placeholder="Location"
                  value={formData.education.location}
                  onChange={(e) =>
                    setFormData({ ...formData, education: { ...formData.education, location: e.target.value } })
                  }
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Degree/Major"
                  value={formData.education.degree}
                  onChange={(e) =>
                    setFormData({ ...formData, education: { ...formData.education, degree: e.target.value } })
                  }
                />
                <Input
                  type="text"
                  placeholder="Duration (e.g., 2020-2024)"
                  value={formData.education.duration}
                  onChange={(e) =>
                    setFormData({ ...formData, education: { ...formData.education, duration: e.target.value } })
                  }
                />
              </div>
              <Input
                type="text"
                placeholder="Relevant Courses"
                value={formData.education.courses}
                onChange={(e) =>
                  setFormData({ ...formData, education: { ...formData.education, courses: e.target.value } })
                }
              />
            </div>

            {/* Work Experience */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold border-b-2 border-secondary pb-2 flex-1">WORK EXPERIENCE</h2>
                <Button
                  type="button"
                  onClick={addExperience}
                  size="sm"
                  className="bg-secondary hover:bg-secondary/90"
                >
                  <FaPlus className="mr-2" /> Add
                </Button>
              </div>

              {formData.experiences.map((exp, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-3 relative">
                  {formData.experiences.length > 1 && (
                    <Button
                      type="button"
                      onClick={() => removeExperience(index)}
                      size="sm"
                      variant="destructive"
                      className="absolute top-2 right-2"
                    >
                      <FaMinus />
                    </Button>
                  )}
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      placeholder="Company Name"
                      className="font-semibold"
                      value={exp.company}
                      onChange={(e) => updateExperience(index, "company", e.target.value)}
                    />
                    <Input
                      type="text"
                      placeholder="Location"
                      value={exp.location}
                      onChange={(e) => updateExperience(index, "location", e.target.value)}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      placeholder="Designation"
                      value={exp.designation}
                      onChange={(e) => updateExperience(index, "designation", e.target.value)}
                    />
                    <Input
                      type="text"
                      placeholder="Duration"
                      value={exp.duration}
                      onChange={(e) => updateExperience(index, "duration", e.target.value)}
                    />
                  </div>
                  <Input
                    type="text"
                    placeholder="Description/Achievements"
                    value={exp.description}
                    onChange={(e) => updateExperience(index, "description", e.target.value)}
                  />
                </div>
              ))}
            </div>

            {/* Leadership */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold border-b-2 border-accent pb-2 flex-1">
                  LEADERSHIP & COMMUNITY INVOLVEMENT
                </h2>
                <Button
                  type="button"
                  onClick={addLeadership}
                  size="sm"
                  className="bg-accent hover:bg-accent/90"
                >
                  <FaPlus className="mr-2" /> Add
                </Button>
              </div>

              {formData.leadership.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Leadership role or community involvement"
                    value={item}
                    onChange={(e) => updateLeadership(index, e.target.value)}
                  />
                  {formData.leadership.length > 1 && (
                    <Button
                      type="button"
                      onClick={() => removeLeadership(index)}
                      size="sm"
                      variant="destructive"
                    >
                      <FaMinus />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            {/* Skills & Certifications */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold border-b-2 border-highlight pb-2">SKILLS & CERTIFICATIONS</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Input
                  type="text"
                  placeholder="Languages"
                  value={formData.languages}
                  onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
                />
                <Input
                  type="text"
                  placeholder="Skills"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                />
                <Input
                  type="text"
                  placeholder="Interests"
                  value={formData.interests}
                  onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 justify-center pt-6">
              <Link href="/pdf-templates">
                <Button type="button" variant="outline">
                  ← Back to Templates
                </Button>
              </Link>
              <PDFDownloadLink
                document={<ResumePDF data={formData} />}
                fileName={`${formData.name || "resume"}.pdf`}
              >
                {({ loading }) => (
                  <Button
                    type="button"
                    className="bg-primary hover:bg-primary/90"
                    disabled={loading}
                  >
                    <FaDownload className="mr-2" />
                    {loading ? "Generating PDF..." : "Download PDF"}
                  </Button>
                )}
              </PDFDownloadLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Resume;
