import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

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

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontFamily: "Times-Roman",
    fontSize: 10,
    lineHeight: 1.5,
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
    borderBottom: "1 solid #000",
    paddingBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
  },
  contact: {
    fontSize: 9,
    color: "#000",
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 6,
    borderBottom: "1.5 solid #000",
    paddingBottom: 2,
  },
  subsectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
    marginTop: 6,
  },
  companyName: {
    fontWeight: "bold",
    fontSize: 10,
  },
  location: {
    fontSize: 9,
    fontStyle: "italic",
  },
  position: {
    fontSize: 10,
    fontStyle: "italic",
  },
  duration: {
    fontSize: 9,
  },
  degreeInfo: {
    fontSize: 10,
    fontStyle: "italic",
    marginBottom: 2,
  },
  bulletPoint: {
    fontSize: 10,
    marginLeft: 15,
    marginBottom: 2,
  },
  bulletText: {
    fontSize: 10,
    marginBottom: 2,
  },
  item: {
    marginBottom: 8,
  },
  coursesText: {
    fontSize: 10,
    marginTop: 2,
  },
  skillsSection: {
    marginTop: 4,
  },
  skillLine: {
    fontSize: 10,
    marginBottom: 2,
  },
  boldLabel: {
    fontWeight: "bold",
  },
});

interface ResumePDFProps {
  data: ResumeData;
}

const ResumePDF = ({ data }: ResumePDFProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{data.name || "John Doe"}</Text>
        <Text style={styles.contact}>
          Street Address, City, State, Zip Code • {data.email} • {data.phone}
        </Text>
      </View>

      {/* Education */}
      <View>
        <Text style={styles.sectionTitle}>EDUCATION</Text>
        
        {data.education.university && (
          <View style={styles.item}>
            <View style={styles.subsectionHeader}>
              <Text style={styles.companyName}>{data.education.university}</Text>
              <Text style={styles.location}>{data.education.location}</Text>
            </View>
            <Text style={styles.degreeInfo}>{data.education.degree}</Text>
            <Text style={styles.duration}>{data.education.duration}</Text>
            {data.education.courses && (
              <Text style={styles.coursesText}>
                <Text style={styles.boldLabel}>Relevant Courses: </Text>
                {data.education.courses}
              </Text>
            )}
          </View>
        )}

        {data.studyAbroad?.university && (
          <View style={styles.item}>
            <View style={styles.subsectionHeader}>
              <Text style={styles.companyName}>{data.studyAbroad.university}</Text>
              <Text style={styles.location}>{data.studyAbroad.location}</Text>
            </View>
            <Text style={styles.degreeInfo}>{data.studyAbroad.degree}</Text>
            <Text style={styles.duration}>{data.studyAbroad.duration}</Text>
            {data.studyAbroad.courses && (
              <Text style={styles.coursesText}>
                <Text style={styles.boldLabel}>Relevant Courses: </Text>
                {data.studyAbroad.courses}
              </Text>
            )}
          </View>
        )}
      </View>

      {/* Work Experience */}
      {data.experiences.some((exp) => exp.company) && (
        <View>
          <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
          {data.experiences.map((exp, index) => (
            exp.company && (
              <View key={index} style={styles.item}>
                <View style={styles.subsectionHeader}>
                  <Text style={styles.companyName}>{exp.company}</Text>
                  <Text style={styles.location}>{exp.location}</Text>
                </View>
                <View style={styles.subsectionHeader}>
                  <Text style={styles.position}>{exp.designation}</Text>
                  <Text style={styles.duration}>{exp.duration}</Text>
                </View>
                {exp.description && (
                  <View>
                    {exp.description.split('\n').map((line, i) => (
                      line.trim() && (
                        <Text key={i} style={styles.bulletPoint}>
                          • {line.trim()}
                        </Text>
                      )
                    ))}
                  </View>
                )}
              </View>
            )
          ))}
        </View>
      )}

      {/* Leadership */}
      {data.leadership.some((item) => item) && (
        <View>
          <Text style={styles.sectionTitle}>LEADERSHIP & COMMUNITY INVOLVEMENT</Text>
          {data.leadership.map(
            (item, index) =>
              item && (
                <Text key={index} style={styles.bulletPoint}>
                  • {item}
                </Text>
              )
          )}
        </View>
      )}

      {/* Skills */}
      <View>
        <Text style={styles.sectionTitle}>SKILLS & CERTIFICATIONS</Text>
        <View style={styles.skillsSection}>
          {data.languages && (
            <Text style={styles.skillLine}>
              <Text style={styles.boldLabel}>Languages: </Text>
              {data.languages}
            </Text>
          )}
          {data.skills && (
            <Text style={styles.skillLine}>
              <Text style={styles.boldLabel}>Skills: </Text>
              {data.skills}
            </Text>
          )}
          {data.interests && (
            <Text style={styles.skillLine}>
              <Text style={styles.boldLabel}>Interests: </Text>
              {data.interests}
            </Text>
          )}
        </View>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
